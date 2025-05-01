module.exports = {
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
        'ts',
        'tsx'
    ],
    transform: {
        '.*\\.(vue)$': 'vue-jest',
        '.*\\.(js|jsx)$': 'babel-jest',
        '.*\\.(ts|tsx)$': 'babel-jest' // Adicione esta linha
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transformIgnorePatterns: [
        "node_modules/(?!axios)/"  // This ignores everything in node_modules *except* axios
    ],
}