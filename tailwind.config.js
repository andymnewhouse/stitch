module.exports = {
  purge: {
    content: [
      './resources/views/**/*.html',
    ],

    options: {
      whitelist: ['bg-indigo-500', 'bg-orange-500', 'bg-gray-100', 'bg-yellow-300', 'bg-red-500'],
    }
  },
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
