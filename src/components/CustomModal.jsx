import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default function CustomModal({
  title = "Title",
  isOpen,
  toggle,
  onCancel,
  cancelText,
  onSubmit,
  submitText,
  onSave,
  onDelete,
  deleteText,
  children,
  isDeleting,
  setIsDeleting
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        
        {onCancel && (
          <Button color="secondary" onClick={onCancel}>
            {cancelText || "Cancel"}
          </Button>
        )}
        {onDelete && (
          <Button color="primary" onClick={() => {
            setIsDeleting(true);
            onDelete();
          }} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : deleteText || "Delete"}
          </Button>
        )}
        {onSubmit && (
          <Button color="success" onClick={onSubmit}>
            {submitText || "Submit"}
          </Button>
        )}
        {onSave && (
          <Button color="success" onClick={onSave}>
            {submitText || "Save"}
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
}
