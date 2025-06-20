import { Text as RNText, TextStyle } from 'react-native';

const getFontByWeightAndStyle = (
    weight?: TextStyle['fontWeight'],
    fontStyle?: TextStyle['fontStyle']
): string => {
    const isItalic = fontStyle === 'italic';

    const map: Record<string, string> = {
        '100': 'Thin',
        '200': 'ExtraLight',
        '300': 'Light',
        '400': 'Regular',
        '500': 'Medium',
        '600': 'SemiBold',
        '700': 'Bold',
        '800': 'Bold',
        '900': 'Bold',
        'normal': 'Regular',
        'bold': 'Bold',
    };

    const weightKey = weight?.toString() ?? '400';
    const base = map[weightKey] || 'Regular';
    return `IBMPlexMono-${base}${isItalic ? 'Italic' : ''}`;
};

export const applyGlobalFont = () => {
    const TextPrototype = RNText as any; // 👈 forzamos acceso a `render`

    const originalRender = TextPrototype.render;

    TextPrototype.render = function (...args: any[]) {
        const origin = originalRender.apply(this, args);
        const props = origin.props;
        const flatStyle = Array.isArray(props.style)
            ? Object.assign({}, ...props.style)
            : props.style || {};
        if (flatStyle.fontFamily) return origin;

        const resolvedFont = getFontByWeightAndStyle(flatStyle.fontWeight, flatStyle.fontStyle);

        const finalStyle = [
            ...(Array.isArray(props.style) ? props.style : [props.style]),
            { fontFamily: resolvedFont },
        ];

        return {
            ...origin,
            props: {
                ...props,
                style: finalStyle,
            },
        };
    };

    // Fallback global si no hay fontWeight/fontStyle
    TextPrototype.defaultProps = TextPrototype.defaultProps || {};
    TextPrototype.defaultProps.style = [
        ...(Array.isArray(TextPrototype.defaultProps.style)
            ? TextPrototype.defaultProps.style
            : [TextPrototype.defaultProps.style]),
        { fontFamily: 'IBMPlexMono-Regular' },
    ];
};
