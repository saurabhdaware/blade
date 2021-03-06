import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';
import { getThemeColors } from '../../_helpers/theme';
import colors from '../../tokens/colors';

const WiFiOn = ({ width, height, fill }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#prefix__clip0)" fill={fill}>
        <Path d="M1.661 10.748a15 15 0 0119.838 0 1 1 0 101.322-1.5C16.397 3.583 6.763 3.583.34 9.247a1 1 0 101.322 1.5z" />
        <Path d="M5.22 14.316a10 10 0 0112.8 0 1 1 0 001.28-1.537 12 12 0 00-15.36 0 1 1 0 001.28 1.537z" />
        <Path d="M14.48 17.922a5 5 0 00-5.79 0 1 1 0 11-1.16-1.63 7 7 0 018.11 0 1 1 0 11-1.16 1.63zM12 22a1 1 0 100-2 1 1 0 000 2z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill={fill} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

WiFiOn.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.oneOf(getThemeColors()),
};

WiFiOn.defaultProps = {
  width: 24,
  height: 24,
  fill: colors.sapphire[800],
};

export default WiFiOn;
