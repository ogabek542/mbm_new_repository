import { filterOptions } from "@/config";
import { Fragment, useState } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { X } from "lucide-react";

function ProductFilter({ filters, handleFilter }) {
  const { t } = useTranslation();
  const translatedFilters = filterOptions(t);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <Button onClick={() => setIsOpen(true)} className="w-full">
          {t("filters_text")}
        </Button>
      </div>

      {/* Desktop Filter */}
      <div className="hidden md:block bg-background rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-lg font-extrabold">{t("filters_text")}</h2>
        </div>
        <div className="p-4 space-y-4">
          {Object.keys(translatedFilters).map((keyItem, index) => (
            <Fragment key={index}>
              <div>
                <h3 className="text-base font-bold">{keyItem}</h3>
                <div className="grid gap-2 mt-2">
                  {translatedFilters[keyItem].map((option) => (
                    <Label
                      key={option.id}
                      className="flex font-medium items-center gap-2"
                    >
                      <Checkbox
                        checked={
                          filters &&
                          filters[keyItem] &&
                          filters[keyItem].includes(option.id)
                        }
                        onCheckedChange={() => handleFilter(keyItem, option.id)}
                      />
                      {option.label}
                    </Label>
                  ))}
                </div>
              </div>
              <Separator />
            </Fragment>
          ))}
        </div>
      </div>

      {/* Mobile Filter Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-extrabold">{t("filters_text")}</h2>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="space-y-4">
            {Object.keys(translatedFilters).map((keyItem, index) => (
              <Fragment key={index}>
                <div>
                  <h3 className="text-base font-bold">{keyItem}</h3>
                  <div className="grid gap-2 mt-2">
                    {translatedFilters[keyItem].map((option) => (
                      <Label
                        key={option.id}
                        className="flex font-medium items-center gap-2"
                      >
                        <Checkbox
                          checked={
                            filters &&
                            filters[keyItem] &&
                            filters[keyItem].includes(option.id)
                          }
                          onCheckedChange={() => handleFilter(keyItem, option.id)}
                        />
                        {option.label}
                      </Label>
                    ))}
                  </div>
                </div>
                <Separator />
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductFilter;
