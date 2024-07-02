export const variantDescription = ({ title, logo }: { title: string; logo: boolean }) => {
 if (title === 'None') {
  return 'Design comes as shown with no customizations'
 }
 if (title === 'Business (design logo)') {
  return "Add your business info and we'll design a logo for you"
 }
 if (title === 'Business (recreate logo)') {
  return "Add your business info and we'll convert your logo design into a vector image for printing"
 }
 if (title === 'Business (logo ready / no logo)') {
  if (logo) {
   return 'Add your business information and a logo as a vector image (.png, .svg), ready to print'
  } else {
   return 'Add your business info to the design, without a logo'
  }
 }
 if (title === 'Name / Text') {
  return 'Add custom text to the design (like your name or a slogan)'
 }
}
