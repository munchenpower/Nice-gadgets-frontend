import { StylesConfig } from 'react-select';
import { OptionType } from '../components/SelectSection/SelectSection';

export const colorStyles1: StylesConfig<OptionType, false> = {
  option: (styles) => ({
    ...styles,
    color: 'black',
    background: 'white',
    textTransform: 'uppercase',
    '&:hover': {
      background: 'hsl(2, 25%, 98%)',
      cursor: 'pointer'
    }
  }),
  control: (base) => ({
    ...base,
    width: 176,
    height: 40,
    textTransform: 'uppercase',
    marginRight: 16,
    marginBottom: 24,
    boxShadow: 'none',
    fontWeight: 700,
    fontSize: 14,
    borderRadius: 8,
    cursor: 'pointer'
  }),
  valueContainer: (styles) => ({
    ...styles,
    textTransform: 'uppercase'
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    width: 0,
    background: 'transparent'
  })
};

export const colorStyles2: StylesConfig<OptionType, false> = {
  option: (styles) => ({
    ...styles,
    color: 'black',
    background: 'white',
    textTransform: 'uppercase',
    '&:hover': {
      background: 'hsl(2, 25%, 98%)',
      cursor: 'pointer'
    }
  }),
  control: (base) => ({
    ...base,
    width: 128,
    height: 40,
    textTransform: 'uppercase',
    marginRight: 16,
    marginBottom: 24,
    boxShadow: 'none',
    fontWeight: 700,
    fontSize: 14,
    borderRadius: 8,
    cursor: 'pointer'
  }),
  valueContainer: (styles) => ({
    ...styles,
    textTransform: 'uppercase'
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    width: 0,
    background: 'transparent'
  })
};
