import { DataPoint } from "@/utils/data-structure";
import ColorBlock from "./colors-block";
export default function Colors({ colors }: DataPoint) {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 ">
          <div>
            <h1 className="text-3xl">Colors</h1>
          </div>
          <div>
            {colors.primary.length && (
              <div
                className={`grid grid-cols-${colors.primary.length} gap-x-4`}
              >
                {colors.primary.map((color) => (
                  <ColorBlock key={color.name} {...color} />
                ))}
              </div>
            )}

            {colors.secondary.length <= 5 ? (
              <div
                className={`grid grid-cols-${colors.secondary.length} gap-x-4`}
              >
                {colors.secondary.map((color) => (
                  <ColorBlock key={color.name} {...color} />
                ))}
              </div>
            ) : (
              <div className="justify-start grid-cols-5 gap-x-4">
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
