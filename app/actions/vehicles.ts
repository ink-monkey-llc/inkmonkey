'use server'
import { Window } from '@/lib/shopify/types'
import { Vehicle } from '@/lib/shopify/types'
import prisma from '@/lib/db'
export const addVehicle = async ({ vehicle, window }: { vehicle: Vehicle; window: Window }) => {
    const { year, make, model, doors } = vehicle
    const { a, b, c } = window
    const windowName = `${make} ${model} Window Size`
    const result = await prisma.addVehicle.create({
        data: {
            updatedAt: new Date(),
            year: Number(year),
            make: make,
            model: model,
            doors: Number(doors),
            AddWindowSize: {
                create: {
                    name: windowName,
                    a: Number(a),
                    b: Number(b),
                    c: Number(c),
                },
            },
        },
        include: {
            AddWindowSize: true,
        },
    })
    return result
}
