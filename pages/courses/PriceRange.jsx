import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { debounce, isset } from "../../utils";
import MultiRangeSlider from "../../components/MultiRangeSlider";

const PriceRange = ({
    min = 0,
    max = 100,
    onChange = () => {},
    ...props
}) => {
    const router = useRouter();
    const [showEditor, setShowEditor] = useState(false);
    const [minValue, setMinValue] = useState(router.query.minPrice);
    const [maxValue, setMaxValue] = useState(router.query.maxPrice);
    const initialValuesProvided = isset(minValue) && isset(maxValue);

    function setFilters(min, max) {
        const filtersProvided = isset(min) && isset(max);
        if(filtersProvided)
            router.push(`?minPrice=${min}&maxPrice=${max}`, undefined, { shallow: true });
        else if(router.pathname == "/search")
            router.push("?");
    }

    const handlePriceRangeChange = debounce(({minValue, maxValue}) => {
        setFilters(minValue, maxValue);
    }, 500);

    useEffect(() => {
        setMinValue(router.query.minPrice);
        setMaxValue(router.query.maxPrice);
    }, [router.query.minPrice, router.query.maxPrice]);

    return (
        <div className="relative">
            <button className="inline-flex items-center py-2 px-4 rounded ml-6 bg-white border shadow-sm"
                onClick={() => setShowEditor(!showEditor)}
            >
                <span className="opacity-50">Price Range: </span>

                {
                    !initialValuesProvided &&  <span className="ml-1.5 opacity-40 lowercase"> Not Set </span>
                }

                {
                    initialValuesProvided && 
                    <>
                        <span className="ml-3 ">
                            Tshs. <span className="leading-none text-lg font-semibold">{minValue}</span>
                        </span>

                        &nbsp;&mdash;&nbsp;

                        <span>
                            Tshs. <span className="leading-none text-lg font-semibold">{maxValue}</span>
                        </span>
                    </>
                }
            </button>

            { showEditor &&
                <div className="z-20 bg-white shadow absolute -bottom-24 right-0 rounded px-3 pt-2 pb-3">
                    <h3 className="text-left font-medium opacity-70 pl-0.5 mb-2">
                        Set price range
                    </h3>

                    <div className="w-[350px]">
                        <MultiRangeSlider
                            min={min}
                            max={max}
                            step={5}
                            preventWheel={false}
                            minValue={minValue}
                            maxValue={maxValue}
                            onInput={handlePriceRangeChange}
                        />
                    </div>
                </div>
            }
        </div>
    );
}

export default PriceRange;