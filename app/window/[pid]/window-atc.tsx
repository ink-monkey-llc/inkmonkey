import useAtc from '@/app/hooks/useAtc'
import Atc from '@/app/atc'
import { ErrorToast } from '@/app/toast/error'
import { SuccessToast } from '@/app/toast/success'
import { initialBusinessLogoData } from '@/app/content/initial-values'
import { useAtom } from 'jotai'
import {
 logoDataUrlAtom,
 selectedLogoFileAtom,
 selectedVariantAtom,
 businessLogoDataAtom,
 businessNameAtom,
 businessSloganAtom,
 businessContactAtom,
 businessLocationAtom,
 businessEtcAtom,
} from '@/app/providers/atoms'
import { uploadLogo } from '@/app/actions/images'

function WindowAtc() {
 const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)
 const [file, setFile] = useAtom(selectedLogoFileAtom)
 const [dataUrl, setDataUrl] = useAtom(logoDataUrlAtom)
 const [businessLogoData, setBusinessLogoData] = useAtom(businessLogoDataAtom)
 const [businessName, setBusinessName] = useAtom(businessNameAtom)
 const [businessSlogan, setBusinessSlogan] = useAtom(businessSloganAtom)
 const [businessContact, setBusinessContact] = useAtom(businessContactAtom)
 const [businessLocation, setBusinessLocation] = useAtom(businessLocationAtom)
 const [businessEtc, setBusinessEtc] = useAtom(businessEtcAtom)

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
    return { status: 'success' }
   }
  }
 }

 const cartAttributes = () => {
  let attributes = []
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
  if (businessLogoData !== initialBusinessLogoData) {
   attributes.push({ key: 'businessLogo', value: businessLogoData.secure_url })
  }
  return attributes
 }

 const { adding, added, addToCart } = useAtc({
  selectedVariant,
  quantity: 1,
  attributes: cartAttributes(),
 })

 const handleAddToCart = async () => {
  if (dataUrl) {
   const result = await handleUpload()
   if (!result) {
    ErrorToast({ msg: 'Something went wrong, please try again' })
    return
   }
   if (result.status === 'error') {
    return
   }
   addToCart()
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
