import type * as CSS from 'csstype';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { MainTheme } from '../theme';
import type { ThemeColorProp, ThemeColorPropWithAlpha } from '../types';

import type { CustomLayoutPropValue, CustomSpacePropValue } from './props';

export type MakeStyleCb<TProps> = (
  theme: MainTheme,
  props: TProps,
) => ComponentStyledProps;

export type StyleObjectParam<TProps> =
  | MakeStyleCb<TProps>
  | {
      [K in keyof TProps]?: TProps[K] extends ComponentStyledProps
        ? ComponentStyledProps | MakeStyleCb<TProps>
        : never;
    };

export type CombinedStyleProps<Props, ExtendedProps> = Props &
  (undefined extends ExtendedProps ? unknown : ExtendedProps);

export type StyledSpaceKey =
  | 'margin'
  | 'm'
  | 'marginTop'
  | 'mt'
  | 'marginRight'
  | 'mr'
  | 'marginBottom'
  | 'mb'
  | 'marginLeft'
  | 'ml'
  | 'marginX'
  | 'mx'
  | 'marginY'
  | 'my'
  | 'padding'
  | 'p'
  | 'paddingTop'
  | 'pt'
  | 'paddingRight'
  | 'pr'
  | 'paddingBottom'
  | 'pb'
  | 'paddingLeft'
  | 'pl'
  | 'paddingX'
  | 'px'
  | 'paddingY'
  | 'py'
  | 'gap';

export type StyledLayoutKey =
  | 'width'
  | 'w'
  | 'height'
  | 'h'
  | 'minWidth'
  | 'minW'
  | 'minHeight'
  | 'minH'
  | 'maxWidth'
  | 'maxW'
  | 'maxHeight'
  | 'maxH'
  | 'size'
  | 'boxSize';

export type StyledLayoutExtraKey =
  | 'overflow'
  | 'overflowX'
  | 'overflowY'
  | 'display'
  | 'verticalAlign'
  | 'textAlign';

export type StyledColorKey =
  | 'color'
  | 'tintColor'
  | 'backgroundColor'
  | 'bg'
  | 'bgColor'
  | 'background'
  | 'textDecorationColor'
  | 'opacity';

export type StyledTypographyKey =
  | 'fontFamily'
  | 'fontWeight'
  | 'textAlign'
  | 'fontStyle'
  | 'wordBreak'
  | 'fontSize'
  | 'overflowWrap'
  | 'textOverflow'
  | 'textTransform'
  | 'whiteSpace'
  | 'textDecorationLine'
  | 'lineHeight'
  | 'letterSpacing';

export type StyledFlexboxKey =
  | 'alignItems'
  | 'alignContent'
  | 'justifyItems'
  | 'justifyContent'
  | 'flexWrap'
  | 'flexDirection'
  | 'flex'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexBasis'
  | 'justifySelf'
  | 'alignSelf'
  | 'order';

export type StyledPositionKey = 'top' | 'right' | 'bottom' | 'left';

export type StyledPositionExtraKey = 'position';

export type StyledBorderExtraKey =
  | 'borderStyle'
  | 'borderTop'
  | 'borderRight'
  | 'borderBottom'
  | 'borderLeft'
  | 'borderTopStyle'
  | 'borderBottomStyle'
  | 'borderLeftStyle'
  | 'borderRightStyle';

export type StyledBorderWidthKey =
  | 'borderWidth'
  | 'borderTopWidth'
  | 'borderBottomWidth'
  | 'borderLeftWidth'
  | 'borderRightWidth';

export type StyledBorderColorsKey =
  | 'borderColor'
  | 'borderTopColor'
  | 'borderBottomColor'
  | 'borderLeftColor'
  | 'borderRightColor';

export type StyledBorderRadiiKey =
  | 'borderRadius'
  | 'borderTopRadius'
  | 'borderLeftRadius'
  | 'borderRightRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius';

export type StyledBackgroundKey =
  | 'backgroundSize'
  | 'backgroundPosition'
  | 'backgroundRepeat'
  | 'backgroundAttachment'
  | 'backgroundBlendMode';

export type StyledZIndexKey = 'zIndex';

export type StyledShadowKey =
  | 'shadowColor'
  | 'shadowOpacity'
  | 'shadowRadius'
  | 'shadowOffset'
  | 'elevation'
  | 'shadow';

export type StyleFunctionProperty = keyof CSS.Properties | StyledShadowKey;

export type TransformFunction = (
  scale: Record<string, string | number>,
  path: string | number,
  theme?: MainTheme,
  property?: StyleFunctionProperty,
) => string | number | undefined;

export type CreateStyleFunctionArgs = {
  properties: StyleFunctionProperty[];
  scale?: keyof MainTheme;
  transform?: TransformFunction;
};

export type SystemConfig<T extends string> = {
  [key in T]: boolean | CreateStyleFunctionArgs;
};

export type CreateSystemComponentProps<SystemKey extends string, Prop> = {
  [Key in SystemKey]?: Prop;
};

export type CreateSystemCssProps<SystemKey extends keyof CSS.Properties> = {
  [Key in SystemKey]?: CSS.Properties[Key];
};

export type SpaceProps = CreateSystemComponentProps<
  StyledSpaceKey,
  CustomSpacePropValue
>;

export type LayoutProps = CreateSystemComponentProps<
  StyledLayoutKey,
  CustomLayoutPropValue
> &
  CreateSystemCssProps<StyledLayoutExtraKey>;

export type ColorProps = CreateSystemComponentProps<
  Exclude<StyledColorKey, 'opacity'>,
  ThemeColorProp | ThemeColorPropWithAlpha
> &
  Partial<{
    opacity: number;
  }>;

export type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold'
  | 'medium'
  | 'regular';

export type FontSize =
  | '8'
  | '10'
  | '12'
  | '13'
  | '14'
  | '16'
  | '18'
  | '20'
  | '22'
  | '24'
  | '26'
  | '28';

export type FontFamily = 'Roboto';

export type FontProps = CreateSystemCssProps<
  Exclude<
    StyledTypographyKey,
    'fontWeight' | 'fontFamily' | 'fontSize' | 'letterSpacing'
  >
> &
  Partial<{
    fontWeight: FontWeight;
    fontFamily: FontFamily;
    fontSize: FontSize;
    letterSpacing: number;
  }>;

export type FlexboxProps = CreateSystemCssProps<StyledFlexboxKey>;

export type PositionProps = CreateSystemComponentProps<
  StyledPositionKey,
  CustomSpacePropValue
> &
  CreateSystemCssProps<StyledPositionExtraKey>;

export type BorderRadiusKey =
  | 'none'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'pill'
  | 'full'
  | 'xxl'
  | number;

export type BorderProps = CreateSystemCssProps<StyledBorderExtraKey> &
  CreateSystemComponentProps<
    StyledBorderColorsKey,
    ThemeColorProp | ThemeColorPropWithAlpha
  > &
  CreateSystemComponentProps<StyledBorderRadiiKey, BorderRadiusKey> & {
    [Key in StyledBorderWidthKey]?: CSS.Properties[Key] | number;
  };

export type BackgorundProps = CreateSystemCssProps<StyledBackgroundKey>;

export type ZIndex =
  | 'regular'
  | 'behind'
  | 'average'
  | 'high'
  | 'higher'
  | 'highest';

export type ZIndexProps = CreateSystemComponentProps<StyledZIndexKey, ZIndex>;

export type ShadowOffsetProp = [number, number];

export type ShadowType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type ShadowProps = Partial<{
  shadowOpacity: number;
  shadowRadius: number;
  shadowColor: ThemeColorProp | ThemeColorPropWithAlpha;
  /** [width, height] */
  shadowOffset: ShadowOffsetProp;
  elevation: number;
  shadow: ShadowType;
}>;

export type ComponentStyledProps = SpaceProps &
  LayoutProps &
  ColorProps &
  FontProps &
  FlexboxProps &
  PositionProps &
  BorderProps &
  BackgorundProps &
  ZIndexProps &
  ShadowProps &
  Partial<{ style: StyleProp<ViewStyle | TextStyle> }>;
