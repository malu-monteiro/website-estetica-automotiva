import { useState } from "react";
import Modal from "./Modal";
import { Trash } from "lucide-react";

export default function Scheduling() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <Trash /> Delete
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <Trash size={32} className="mx-auto text-red-500" />
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button>Delete</button>
            <button>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
