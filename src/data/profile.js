// Single source of truth for personal details.

// Profile photo: drop any .jpg/.jpeg/.png/.webp into src/assets/profile/ and it is used automatically.
const photos = import.meta.glob('../assets/profile/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', { eager: true, import: 'default' })
const photo = Object.values(photos)[0] ?? null

// Replace every [ADD ...] value when the information is available.
export const profile = {
  name: 'Rhyan Orosco',
  field: 'Information Technology',
  program: 'Information Technology',
  school: 'Computer Arts and Technological College, Inc.',
  email: 'oroscorhyan@gmail.com',
  github: 'https://github.com/rhyanorosco',
  phone: '09491905661',
  phoneHref: 'tel:+639491905661',
  otherLinks: [], // e.g. { label: 'Facebook Page', url: 'https://...' }
  photo,
}
