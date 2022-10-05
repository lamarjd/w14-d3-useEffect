import { useEffect } from 'react'

function Message({ size, setSize }) {

  // useEffect(() => {
  //   console.log('PictureDisplay size', size);
  //   let className = '';
  //   switch (size) {
  //     case "m":
  //       className = "medium";
  //       break;
  //     case "l":
  //       className = "large";
  //       break;
  //     case "xl":
  //       className = "xlarge"
  //       break;
  //     default:
  //       className = "small";
  //       break;
  //   }
  //   setclassSize(className);
  // }, [size]);

  return (
    <div className={`message medium`}>
      (Oh my! Your bird is naked!)
    </div>
  );
};

export default Message;
