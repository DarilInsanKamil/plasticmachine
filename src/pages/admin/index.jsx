import Axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { InputText } from "../../components"
import { options } from "../../utils/data"

export const Admin = () => {
  const [title, setTitle] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [kategori, setKategori] = useState("")
  const [image, setImage] = useState("")
  const [previewImage, setPreviewImage] = useState("")
  const navigation = useNavigate()

  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setPreviewImage(URL.createObjectURL(file))
  };

  const submit = () => {
    const data = new FormData()
    data.append("title", title)
    data.append("deskripsi", deskripsi)
    data.append("kategori", kategori)
    data.append("image", image)

    Axios.post("http://localhost:4001/v1/product/post", data, {
      headers: {
        "content-type": "multipart/from-data",
      },
    })
      .then((res) => console.log("post success", res))
      .catch((err) => console.log(err))
    navigation("/productlist")
  };
  // console.log(kategori)

  return (
    <>
      <InputText
        type="text"
        name="title"
        placeholder="masukan title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputText
        type="text"
        name="deskripsi"
        onChange={(e) => setDeskripsi(e.target.value)}
        value={deskripsi}
        placeholder="tuliskan seseuatu"
      />
      {previewImage == "" ? (
        <></>
      ) : (
        <img
          src={previewImage}
          alt="preview-img"
          style={{ width: 200, height: "fit-content" }}
        />
      )}
      <select id="lang" onChange={(e) => setKategori(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <InputText type="file" onChange={(e) => handleImage(e)} />
      <InputText type="button" value="Kirim" onClick={submit} />
    </>
  );
};
