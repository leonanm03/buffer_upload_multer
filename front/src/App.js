import axios from "axios";
import { useRef, useState } from "react";

function App() {
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/server/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input type="file" ref={fileInput} onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </>
  );

  return <>teste</>;
}

export default App;
