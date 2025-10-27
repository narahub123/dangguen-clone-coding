import { type FC } from "react";
import { Icon, Modal } from "../common";
import { ITEM_TAGS } from "../../data";
import type { ItemTagType } from "../../types";

interface ItemListModalProps {
  isOpen: boolean;
  tags: ItemTagType[];
  onClose: () => void;
  onClick: (tag: ItemTagType) => void;
}

export const ItemListModal: FC<ItemListModalProps> = ({
  isOpen,
  tags,
  onClose,
  onClick,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="h-full flex flex-col">
        <div className="overflow-auto">
          {ITEM_TAGS.map((tag) => {
            const isCheck = tags.findIndex((t) => t.value === tag.value) !== -1;
            return (
              <button
                className={`w-full text-left p-2 cursor-pointer flex justify-between items-center`}
                onClick={() => onClick(tag)}
                key={tag.value}
              >
                <p>{tag.name}</p>
                {isCheck && <Icon name="check" className="text-orange-400" />}
              </button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
