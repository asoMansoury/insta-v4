'use client'
import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from 'react-modal';
import { CameraIcon } from "@heroicons/react/24/outline"; 
import { useRef, useState } from "react";
export default function UploadModal() {
  const [open,setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef();
  const [selectedFile,setSelectedFile] = useState(null);

  function addImgeToPost(event){
    const reader = new FileReader();
    if(event.target.files[0]){
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    }
  }
  return (
    <div className="">
        {
          open && (
            <Modal
              className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] bg-white border-2 rounded-md shadow-md translate-x-[-50%]  z-10"
              isOpen={open}
              onRequestClose={()=> {setOpen(false); setSelectedFile(null);}}
            >
              <div className="flex flex-col justify-center items-center h-[100%]">
                {
                  selectedFile ? (
                                      <img onClick={()=>setSelectedFile(null)} src={selectedFile} className="w-full max-h-[250px] object-cover object-center cursor-pointer" alt="" />
                                    ):(
                                      <CameraIcon onClick={()=>filePickerRef.current.click()} className="h-14 cursor-pointer bg-red-200 p-2 rounded-full border-2 text-red-500" />
                                    )
                }
                  <input type="file" className="hidden" ref={filePickerRef} onChange={addImgeToPost}></input>
                  <input type="text" maxLength="150" placeholder="Please enter your caption..." className="mt-4 border-none text-center w-full focus:ring-0"></input>
                  <button disabled className="text-white w-full bg-red-600 p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100">Upload Post</button>
              </div>
            </Modal>
          )
        }
    </div>
  )
}
