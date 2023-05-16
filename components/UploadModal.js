'use client'
import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from 'react-modal';
export default function UploadModal() {
  const [open,setOpen] = useRecoilState(modalState);
  return (
    <div className="">
        {
          open && (
            <Modal
              className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] bg-white border-2 rounded-md shadow-md translate-x-[-50%]  z-10"
              isOpen={open}
              onRequestClose={()=> setOpen(false)}
            >
              <div className="flex flex-col justify-center items-center h-[100%]"></div>
            </Modal>
          )
        }
    </div>
  )
}
