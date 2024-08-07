/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EhCbcKGpNfz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid gap-6">
          <div className="bg-background border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Weekly Meal Plan</h2>
            <div className="grid grid-cols-7 gap-4">
              <div className="col-span-1 font-medium">Monday</div>
              <div className="col-span-6 grid gap-2">
                <Input id="monday-main" placeholder="Main Dish" className="w-full" />
                <Input id="monday-sides" placeholder="Sides" className="w-full" />
                <Textarea id="monday-notes" placeholder="Notes" className="w-full" />
              </div>
              <div className="col-span-1 font-medium">Tuesday</div>
              <div className="col-span-6 grid gap-2">
                <Input id="tuesday-main" placeholder="Main Dish" className="w-full" />
                <Input id="tuesday-sides" placeholder="Sides" className="w-full" />
                <Textarea id="tuesday-notes" placeholder="Notes" className="w-full" />
              </div>
              <div className="col-span-1 font-medium">Wednesday</div>
              <div className="col-span-6 grid gap-2">
                <Input id="wednesday-main" placeholder="Main Dish" className="w-full" />
                <Input id="wednesday-sides" placeholder="Sides" className="w-full" />
                <Textarea id="wednesday-notes" placeholder="Notes" className="w-full" />
              </div>
              <div className="col-span-1 font-medium">Thursday</div>
              <div className="col-span-6 grid gap-2">
                <Input id="thursday-main" placeholder="Main Dish" className="w-full" />
                <Input id="thursday-sides" placeholder="Sides" className="w-full" />
                <Textarea id="thursday-notes" placeholder="Notes" className="w-full" />
              </div>
              <div className="col-span-1 font-medium">Friday</div>
              <div className="col-span-6 grid gap-2">
                <Input id="friday-main" placeholder="Main Dish" className="w-full" />
                <Input id="friday-sides" placeholder="Sides" className="w-full" />
                <Textarea id="friday-notes" placeholder="Notes" className="w-full" />
              </div>
              <div className="col-span-1 font-medium">Saturday</div>
              <div className="col-span-6 grid gap-2">
                <Input id="saturday-main" placeholder="Main Dish" className="w-full" />
                <Input id="saturday-sides" placeholder="Sides" className="w-full" />
                <Textarea id="saturday-notes" placeholder="Notes" className="w-full" />
              </div>
              <div className="col-span-1 font-medium">Sunday</div>
              <div className="col-span-6 grid gap-2">
                <Input id="sunday-main" placeholder="Main Dish" className="w-full" />
                <Input id="sunday-sides" placeholder="Sides" className="w-full" />
                <Textarea id="sunday-notes" placeholder="Notes" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Grocery List</h2>
          <Textarea id="grocery-list" placeholder="Add items to your grocery list..." className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
