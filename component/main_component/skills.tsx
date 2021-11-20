import styles from "../../styles/Home.module.css";
import Image from "next/image";
export default function Skills() {
  const js = require('../../asset/javascript.png')
  const py = require('../../asset/python.png')
  const node = require('../../asset/node.svg')
  const react = require('../../asset/react.png')
  const next = require('../../asset/next.png')
  const ts = require('../../asset/typescript.png')

  const skill: { logo: {}; name: String }[] = [
    {
      logo: js,
      name: "Javascript",
    },
    {
      logo: ts,
      name: "Typescript",
    },
    {
      logo: node,
      name: "NodeJS",
    },
    {
      logo: react,
      name: "ReactJS",
    },
    {
      logo: next,
      name: "NextJS",
    },
    {
      logo: py,
      name: "Python",
    },
  ];
  // ngerender skill card, logo dan nama
  const renderCard = function (skill: any, index: any) {
    return (
      // eslint-disable-next-line react/jsx-key
      <div className=" kartu card m-2 " style={{ width: "9rem" }}>
        <div className="d-flex flex-column justify-content-center align-items-center card-body" key={index}>
          {/* tempat gambar logo */}
            <Image
              className="picskill"
              src={skill.logo}
              alt={skill.name}
              width={70}
              height={70}
              objectFit={"contain"}
              />
          <h5 className={styles.txtskill} style={{paddingTop: "15px"}}>{skill.name}</h5>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-5 mb-5 pt-5">
      <h1>Skills</h1>
      <div
        className="d-flex justify-content-start flex-wrap mt-4"
        style={{ maxHeight: "15rem" }}
      >
        {skill.map(renderCard)}
      </div>
    </div>
  );
}
