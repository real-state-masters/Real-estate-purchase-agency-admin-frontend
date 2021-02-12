function readURL(input) {
  var reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("visible-img-id").src = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
}

const UploadImg = () => {
  return (
    <>
      <input
        type="file"
        id="uploadFile"
        name="image"
        onchange={() => readURL(this)}
      />

      <img
        id={"visible-img-id"}
        className="image-post"
        alt="property-img"
      ></img>
    </>
  );
};

export default UploadImg;
