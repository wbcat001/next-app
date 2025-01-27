"use client";

import { useState, ChangeEvent } from 'react'
import { uploadImg } from '@/lib/image';



export default function UploadFilePage() {
  const [file, setFile] = useState<File | null>(null)
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0]
    if (!selectedFile) return
    setFile(selectedFile)
  }
  // 画像のアップロード
  const handleSubmit = async (file: File) => {
    try{
      const imageIDinGcs = await uploadImg(file)
      if (!imageIDinGcs) return alert('画像のアップロードに失敗しました。')
      console.log(imageIDinGcs)
      // databaseに登録
      
    }catch(error: unknown){
      if (error instanceof Error){
        console.error(error.message)
      }else{
        console.error('An unknown error occurred')
      }
    }
  }
  
  

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={() => file && handleSubmit(file)}>Submit</button>
    </div>
  )
}
// export const HomePage: NextPage = () => {
//     const [file, setFile] = useState<File | null>(null)
//     // 以下でfileの変更を検知してデータを取得
//     const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const selectedFile = event.target.files && event.target.files[0]
//         if (!selectedFile) return
//         setFile(selectedFile)
//     }
    
//     const handleSubmit = async(file: File) => {
//     const imageIDinGcs = await uploadImg(file)
//     if (!imageIDinGcs) return alert('画像のアップロードに失敗しました。')
//       // ここから先はまあ、データベースに登録するなり好きにやってください
//     }
// }
    