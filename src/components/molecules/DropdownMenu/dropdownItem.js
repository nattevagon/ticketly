import Link from "next/link";

const DropdownItem = ({ icon: Icon, label, onClick, linkUrl }) => {
  return (
    <div className="cursor-pointer rounded-xl w-full px-4 py-2 hover:bg-gray-300">
      {onClick && (
        <div className="flex items-center" onClick={() => onClick()}>
          {Icon && <Icon className="w-[16px] text-primary-black mr-2" />}
          <div className="text-primary-black text-sm font-medium">{label}</div>
        </div>
      )}
      {linkUrl && (
        <Link className="flex items-center" href={linkUrl}>
          {Icon && <Icon className="w-[16px] text-primary-black mr-2" />}
          <div className="text-primary-black text-sm font-medium">{label}</div>
        </Link>
      )}
    </div>
  );
};

export default DropdownItem;
