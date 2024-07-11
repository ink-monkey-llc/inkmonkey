'use server'
import { Window } from '@/lib/shopify/types'
import { Vehicle } from '@/lib/shopify/types'
const API_URL = 'https://localhost:8888'
export const addNewVehicle = async (data: { vehicle: Vehicle; window: Window }) => {
 const response = fetch(`/api/vehicle`, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
 })
 console.log('response:', response)
 return await response
}
