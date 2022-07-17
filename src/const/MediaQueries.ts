const desktopSize = {
    mobile: 390,
    tablet: 768,
    desktop: 1024,
}

export const device = {
    mobile: `@media (min-width: ${desktopSize.mobile}px)`,
    tablet: `@media (min-width: ${desktopSize.tablet}px)`,
    desktop: `@media (min-width: ${desktopSize.desktop}px)`,
}

