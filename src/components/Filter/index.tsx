import React from "react";
import { MdCheckBoxOutlineBlank, MdSentimentNeutral } from "react-icons/md";
import { IoMdSquare } from "react-icons/io";
import { Container, Link } from "./styled";

const Filter = () => {
  return (
    <Container>
      <Link>
        <MdCheckBoxOutlineBlank
          size={16}
          style={{ marginRight: 12 }}
          cursor="pointer"
        />
        Todos
      </Link>
      <Link>
        <IoMdSquare size={16} style={{ marginRight: 12 }} cursor="pointer" />
        Finalizado
      </Link>
      <Link>
        <MdSentimentNeutral
          size={16}
          style={{ marginRight: 12 }}
          cursor="pointer"
        />
        Em Progresso
      </Link>
    </Container>
  );
};

export default Filter;
