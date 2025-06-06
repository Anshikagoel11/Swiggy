import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, level = 0 }) {
  const isNested = level > 0;

  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <h1
          className={`mt-7 text-start ${
            isNested ? "text-lg font-bold" : "text-xl font-bold"
          }`}
        >
          {menuItems?.title}
        </h1>

        <div>
          {menuItems?.categories?.map((items) => (
            <MenuCard key={items?.title} menuItems={items} level={level + 1} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1
        className={`mt-7 text-start ${
          isNested ? "text-lg font-bold text-[17px]" : "text-xl font-bold"
        }`}
      >
        {menuItems?.title}
      </h1>

      <div>
        {menuItems?.itemCards?.map((items) => (
          <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />
        ))}
      </div>
    </div>
  );
}
