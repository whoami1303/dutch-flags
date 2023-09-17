import { DataPoint } from "@/utils/data-structure";
import ColorBlock from "./colors-block";
export default function Colors({ colors }: DataPoint) {
  return (
    <>
      <div className="container my-10">
        <div className="grid grid-cols-2 ">
          <div>
            <h1 className="text-3xl">Colors</h1>
          </div>
          <div>
            {colors.primary.length > 1 ? (
              <div
                className={`justify-center grid grid-cols-${colors.primary.length} gap-x-4`}
              >
                {colors.primary.map((color) => (
                  <ColorBlock key={color.name} {...color} />
                ))}
              </div>
            ) : (
              <div className={`justify-center  gap-x-4`}>
                {colors.primary.map((color) => (
                  <ColorBlock key={color.name} {...color} />
                ))}
              </div>
            )}

            {colors.secondary.length <= 5 ? (
              <div
                className={`justify-start grid lg:grid-cols-${colors.secondary.length} md:grid-cols-2 sm:grid-cols-1 gap-x-4`}
              >
                {colors.secondary.map((color) => (
                  <ColorBlock key={color.name} {...color} />
                ))}
              </div>
            ) : (
              <div className="justify-start grid grid-cols-5 gap-x-4">
                {colors.secondary.map((color) => (
                  <ColorBlock key={color.name} {...color} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}