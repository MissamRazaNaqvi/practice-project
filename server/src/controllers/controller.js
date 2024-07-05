const initial = (req, res) => {
  console.log("server running");
  res.send("server running");
};

const studentdata = (req, res) => {
  // Retrieve form fields
  const { studentId, name, age, roomNumber } = req.body;

  // Retrieve files
  const image = req.files.image ? req.files.image[0] : null;
  const file = req.files.file ? req.files.file[0] : null;

  // Log the received data
  console.log({
    studentId,
    name,
    age,
    roomNumber,
    image,
    file,
  });

  // Process data or save to database

  // Respond with a success message or handle errors
  res.json({
    success: true,
    message: "Student created successfully",
    data: {
      studentId,
      name,
      age,
      roomNumber,
      image: image ? image.buffer.toString("base64") : null,
      file: file ? file.buffer.toString("base64") : null,
    },
  });
};
module.exports = {
  initial,
  studentdata,
};
