import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  let myClassName = 'tab';
  if (props.tab === props.selectedTab) myClassName = 'tab active-tab';
  return (
    <div
      className={myClassName}
      onClick={() => {props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default Tab;
