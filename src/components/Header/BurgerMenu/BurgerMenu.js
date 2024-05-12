import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openMenuMode } from 'redux/menuMode/menuModeSlice';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import sprite from '../../../images/sprite.svg';

import { Button, Icon } from './BurgerMenu.styled';

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const handleClick = () => {
    dispatch(openMenuMode());
  };
  return (
    <Button type="button" onClick={handleClick} isOpen={isMenuOpen}>
      <Icon>
        <use href={sprite + '#icon-menu'} />
      </Icon>
    </Button>
  );
};

export default BurgerMenu;
