const colors: string[] = ['#ef4444', '#fb923c', '#facc15', '#a3e635', '#22d3ee', '#ec4899'];

function getColor(colors: string[]): string {
    const randomColor = Math.floor(Math.random() * colors.length)
    const colorSelect = colors[randomColor]

    return colorSelect
}

export const myColor = getColor(colors)