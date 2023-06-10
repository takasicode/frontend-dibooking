import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ButtonRating from "./ButtonRating";
import CommentSection from "./CommentSection";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Rating = () => {
  const comments = [
    {
      id: 1,
      name: "INA JABRAN",
      date: "20-05-2023 20:15 | Waktu : 19.00 - 20.00",
      star: 5,
      comment: "Mantap, seru-seruan main futsal disini fasilitasnya lengkap, tempatnya enak banget buat main futsal",
    },
    {
      id: 2,
      name: "NOKA YOHAN",
      date: "15-06-2023 20:20 | Waktu : 20.00 - 22.00",
      star: 4,
      comment: "Seru banget!",
    },
  ];

  const buttons = [
    { title: "Semua", selected: true },
    { title: "5 Bintang (30)" },
    { title: "4 Bintang (4)" },
    { title: "3 Bintang (1)" },
    { title: "2 Bintang (0)" },
    { title: "1 Bintang (0)" },
    { title: "Dengan Komentar (28)" },
  ];

  const [selectedButton, setSelectedButton] = useState(buttons[0].title);

  const handleButtonClick = (title) => {
    setSelectedButton(title);
  };

  const calculateAverageRating = () => {
    let totalStars = 0;
    let numberOfComments = comments.length;

    for (let i = 0; i < numberOfComments; i++) {
      totalStars += comments[i].star;
    }

    let averageRating = totalStars / numberOfComments;
    averageRating = averageRating.toFixed(1);
    return averageRating;
  };

  const averageRating = calculateAverageRating();

  return (
    <div className="mt-1" style={{ height: "fit-content", overflow: "hidden", margin: "auto" }}>
      <h5 className="mb-3" style={{ fontWeight: "700" }}>Ulasan</h5>
      <div className="d-flex align-items-center justify-content-between margin bg-dark px-3" style={{ height: "5rem" }}>
        <div className="d-flex align-items-center text-white">
          <FaStar color="#FF7315" size={35} />
          <h3 className="m-0 mx-2">{averageRating}</h3>
          <h5 className="m-0">dari 5</h5>
        </div>
        <div className="d-none d-xxl-flex">
          <ButtonGroup>
            {buttons.map((button, index) => (
              <ButtonRating
                key={index}
                title={button.title}
                handleClick={() => handleButtonClick(button.title)}
                selected={selectedButton === button.title}
              />
            ))}
          </ButtonGroup>
        </div>
        <div className="d-flex d-xxl-none">
          <DropdownButton
            as={ButtonGroup}
            title="Selengkapnya..."
            id="bg-nested-dropdown"
            variant={selectedButton === "Selengkapnya..." ? "light" : "#ffffff"}
            style={{
              backgroundColor: selectedButton === "Selengkapnya..." ? "#ff7315" : "#ff7315",
              color: selectedButton === "Selengkapnya..." ? "#ffffff" : "#ffffff",
              borderColor: "none",
            }}>
            {buttons.map((button, index) => (
              <ButtonRating
                key={index}
                title={button.title}
                handleClick={() => handleButtonClick(button.title)}
                selected={selectedButton === button.title}
              />
            ))}
          </DropdownButton>
        </div>
      </div>
      <div className="comment-section pt-5">
        {comments.map((comment) => (
          <CommentSection
            key={comment.id}
            name={comment.name}
            date={comment.date}
            star={comment.star}
            comment={comment.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;