import React from "react";
import * as actions from "reducers/visibility-filter/actions";
import { connect } from "react-redux";
import { MdCheckBoxOutlineBlank, MdSentimentNeutral } from "react-icons/md";
import { IoMdSquare } from "react-icons/io";
import { Container, Link } from "./styled";
import { Dispatch } from "redux";
import { setVisibilityFilter } from "reducers/visibility-filter/actions-creator";

const Filter = ({
  activeFilter,
  handleFilter,
}: {
  activeFilter: string;
  handleFilter: any;
}) => {
  return (
    <Container>
      {filterItems.map((item: any) => {
        if (activeFilter === item.action) {
          return <span key={item.action}>Filtro</span>;
        }

        return (
          <Link key={item.action} onClick={handleFilter(item.action)}>
            {item.icon}
            {item.label}
          </Link>
        );
      })}
    </Container>
  );
};

const filterItems: Array<object> = [
  {
    icon: (
      <MdCheckBoxOutlineBlank
        size={16}
        style={{ marginRight: 12 }}
        cursor="pointer"
      />
    ),
    label: "Todos",
    action: actions.SHOW_ALL,
  },
  {
    icon: <IoMdSquare size={16} style={{ marginRight: 12 }} cursor="pointer" />,
    label: "Finalizado",
    action: actions.SHOW_COMPLETED,
  },
  {
    icon: (
      <MdSentimentNeutral
        size={16}
        style={{ marginRight: 12 }}
        cursor="pointer"
      />
    ),
    label: "Em Progresso",
    action: actions.SHOW_ACTIVE,
  },
];

const mapDipatchToProps = (dispatch: Dispatch) => ({
  handleFilter: (filter: string) => (e: Event) => {
    dispatch(setVisibilityFilter(filter));
  },
});

const mapStateToProps = (state: any) => ({
  activeFilter: state.visibilityFilter,
});

export default connect(mapStateToProps, mapDipatchToProps)(Filter);
