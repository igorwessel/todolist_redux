import React from "react";
import * as actions from "reducers/visibility-filter/actions";
import { connect } from "react-redux";
import { MdCheckBoxOutlineBlank, MdFormatListBulleted } from "react-icons/md";
import { IoMdSquare } from "react-icons/io";
import { Container, Link } from "./styled";
import { Dispatch } from "redux";
import { Store } from "interfaces";
import { FilterItems } from "interfaces/filter";
import { setVisibilityFilter } from "reducers/visibility-filter/actions-creator";

const Filter = ({
  activeFilter,
  handleFilter,
}: {
  activeFilter: string;
  handleFilter: Function;
}) => {
  return (
    <Container>
      {filterItems.map((item: FilterItems) => {
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

const filterItems: Array<FilterItems> = [
  {
    icon: (
      <MdFormatListBulleted
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
      <MdCheckBoxOutlineBlank
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
  handleFilter: (filter: string) => (e: MouseEvent) => {
    dispatch(setVisibilityFilter(filter));
  },
});

const mapStateToProps = (state: Store) => ({
  activeFilter: state.visibilityFilter,
});

export default connect(mapStateToProps, mapDipatchToProps)(Filter);
