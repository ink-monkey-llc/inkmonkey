import useAtc from '@/app/hooks/useAtc'
import Atc from '@/app/atc'
import { ErrorToast } from '@/app/toast/error'
import { SuccessToast } from '@/app/toast/success'
import { initialBusinessLogoData } from '@/app/content/initial-values'
import { useAtom } from 'jotai'
import {
 logoDataUrlAtom,
 selectedLogoOptionAtom,
 selectedLogoFileAtom,
 selectedVariantAtom,
 businessLogoDataAtom,
 businessNameAtom,
 businessSloganAtom,
 businessContactAtom,
 businessLocationAtom,
 businessEtcAtom,
 textContentAtom,
 textDetailsAtom,
} from '@/app/providers/atoms'
import { uploadLogo } from '@/app/actions/images'

function WindowAtc() {
 const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)
 const [selectedLogoOption, setSelectedLogoOption] = useAtom(selectedLogoOptionAtom)
 const [file, setFile] = useAtom(selectedLogoFileAtom)
 const [dataUrl, setDataUrl] = useAtom(logoDataUrlAtom)
 const [businessLogoData, setBusinessLogoData] = useAtom(businessLogoDataAtom)
 const [businessName, setBusinessName] = useAtom(businessNameAtom)
 const [businessSlogan, setBusinessSlogan] = useAtom(businessSloganAtom)
 const [businessContact, setBusinessContact] = useAtom(businessContactAtom)
 const [businessLocation, setBusinessLocation] = useAtom(businessLocationAtom)
 const [businessEtc, setBusinessEtc] = useAtom(businessEtcAtom)
 const [textContent, setTextContent] = useAtom(textContentAtom)
 const [textDetails, setTextDetails] = useAtom(textDetailsAtom)

 const handleUpload = async () => {
  if (file) {
   const res = await uploadLogo({ dataUrl, fileName: file.name, fileSize: file.size })
   if (res.error) {
    ErrorToast({ msg: 'Logo upload failed, please try again' })
    console.log('error:', res.error)
    return { status: 'error' }
   } else {
    setBusinessLogoData({ publicId: res.imgData?.publicId, url: res.imgData?.url, secure_url: res.imgData?.secure_url })
    console.log('success:', res.imgData)
    return { status: 'success', imgUrl: res.imgData?.secure_url }
   }
  }
 }

 const isBusiness = selectedVariant && selectedVariant?.title?.includes('Business')
 const isText = selectedVariant && selectedVariant?.title?.includes('Name / Text')

 const cartAttributes = (imgUrl?: string) => {
  let attributes = []
  if (isBusiness) {
   if (businessName) {
    attributes.push({ key: 'businessName', value: businessName })
   }
   if (businessSlogan) {
    attributes.push({ key: 'businessSlogan', value: businessSlogan })
   }
   if (businessContact) {
    attributes.push({ key: 'businessContact', value: businessContact })
   }
   if (businessLocation) {
    attributes.push({ key: 'businessLocation', value: businessLocation })
   }
   if (businessEtc) {
    attributes.push({ key: 'businessEtc', value: businessEtc })
   }
   if (imgUrl && imgUrl !== '') {
    console.log('businessLogoData.secure_url:', imgUrl)
    attributes.push({ key: 'businessLogo', value: imgUrl })
   }
  }
  if (isText) {
   if (textContent !== '') {
    attributes.push({ key: 'textContent', value: textContent })
   }
   if (textDetails !== '') {
    attributes.push({ key: 'textDetails', value: textDetails })
   }
  }
  return attributes
 }

 const { adding, added, addToCart } = useAtc()

 const handleAddToCart = async () => {
  if (isBusiness) {
   if (!businessName || businessName === '') {
    ErrorToast({ msg: 'Please specify your business name' })
    return
   }
   if (dataUrl && dataUrl !== '') {
    if (!selectedLogoOption) {
     ErrorToast({ msg: 'Please specify your logo option' })
     return
    }
    const result = await handleUpload()
    if (!result) {
     ErrorToast({ msg: 'Something went wrong, please try again' })
     return
    }
    if (result.status === 'error') {
     return
    }
    if (result.status === 'success') {
     addToCart({
      selectedVariant,
      quantity: 1,
      attributes: cartAttributes(result.imgUrl),
     })
     return
    }
   }
   if (!dataUrl || dataUrl === '') {
    addToCart({
     selectedVariant,
     quantity: 1,
     attributes: cartAttributes(),
    })
   }
  }
  if (isText) {
   if (textContent === '') {
    ErrorToast({ msg: 'Please enter your custom text' })
    return
   }
   addToCart({
    selectedVariant,
    quantity: 1,
    attributes: cartAttributes(),
   })
  }
  if (!isBusiness && !isText) {
   addToCart({
    selectedVariant,
    quantity: 1,
    attributes: cartAttributes(),
   })
  }
 }

 return (
  <Atc
   addToCart={handleAddToCart}
   adding={adding}
   added={added}
  />
 )
}

export default WindowAtc
