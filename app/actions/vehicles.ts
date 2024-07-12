'use server'
import { Window } from '@/lib/shopify/types'
import { Vehicle } from '@/lib/shopify/types'
const API_URL = 'https://localhost:8888'
export const addNewVehicle = async (data: { vehicle: Vehicle; window: Window }) => {
 console.log('data:', data)
 try {
  const response = fetch(`${API_URL}/save`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(data),
  })
  console.log('response:', response)
  return { success: true, data: (await response).json() }
 } catch (error) {
  console.log('error:', error)
  return error
 }
}
