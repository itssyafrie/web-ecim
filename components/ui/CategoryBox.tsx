"use client";

interface CategoryBoxProps {
  label: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ label }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4 px-3 py-1 rounded-lg hover:bg-blue-500 transition cursor-pointer">
      <div className="font-normal text-center text-sm text-white">{label}</div>
    </div>
  );
};

export default CategoryBox;
