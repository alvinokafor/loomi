import AddIcon from "@/components/general-icons/add-icon";
import RemoveIcon from "@/components/general-icons/remove-icon";

export default function CardProductInfo() {
  return (
    <div className="ml-8 flex flex-col justify-between">
      <div className="space-y-2">
        <p className="text-xl font-semibold text-primary">$12.99</p>
        <p>V-Neck Dress</p>
      </div>

      <div className="flex items-center gap-x-8">
        <p className="text-sm text-secondary">
          Size: <span className="font-medium text-black">XS</span>
        </p>
        <div className="flex items-center gap-x-2">
          <span className="text-secondary">Q-ty:</span>
          <div className="flex items-center gap-x-2">
            <button>
              <RemoveIcon />
            </button>
            <span>1</span>
            <button>
              <AddIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
