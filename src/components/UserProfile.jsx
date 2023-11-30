import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import UserAPI from '../api/UserApi';
import TokenManager from '../api/TokenManager';
import { Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';

export default function UserProfile(props) {
    const userId = TokenManager.getClaims()?.userId;
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const navigate = useNavigate();

    const handleEditNavigate = () => {
        navigate("/editUser/" + userId);
    };

    const handleDeleteNavigate = () => {
        setShowDeleteModal(true);
    }

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
              const user = await UserAPI.getUserById(userId);
              setUserData(user);
            } catch (error) {
              console.error('Error fetching user details:', error);
            } finally {
              setLoading(false);
            }
        };

        fetchUserDetails();
    }, [userId]);

    const handleDeleteConfirm = async () => {
        try 
        {
            const updatedUser = { ...userData, active: !userData.active };
            await UserAPI.updateUser(updatedUser)
         
            TokenManager.clear();

            navigate("/");
            window.location.reload();    

            toast.success("Account deleted!")
        } catch (error) {
          toast.error("Failed to delete your account!")
          // Handle error if needed
        } finally {
          setShowDeleteModal(false);
        }
      };

      const handleDeleteCancel = () => {
        setShowDeleteModal(false);
      };

    if(loading){
        return<p>Loading...</p>
    }

    return(
        // <div>
        //     <p>First Name: {userData.firstName}</p>
        //     <p>Last Name: {userData.lastName}</p>
        // </div>

        <div className="mt-3">
        <table className="table table-striped mt-3">
        <thead className="sticky-top">
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            <td>
                {userData.firstName}
            </td>
            <td>
                {userData.lastName}
            </td>
            <td>
                {userData.email}
            </td>
            <td>
                {userData.phoneNumber}
            </td>
                <td>
                    <button
                    className="btn btn-primary mx-2"
                    onClick={handleEditNavigate}>
                    Edit
                    </button>
                </td>
                <td>
                    <button className='btn btn-danger'
                    onClick={handleDeleteNavigate}>
                        Delete Account
                    </button>
                </td>
        </tbody>
        </table>

        {/* Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={handleDeleteCancel} centered>
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure that you want to delete your account?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleDeleteCancel}>
                Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteConfirm}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}
  