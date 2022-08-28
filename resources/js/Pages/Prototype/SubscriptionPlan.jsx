import Authenticated from "@/Layouts/Authenticated/index";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function SubscriptionPlan() {
    return<Authenticated>

<div class="py-2 flex flex-col items-center">
                <div class="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p class="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* Pricing Card */}
                <div class="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    <SubscriptionCard 
                    name="basic" 
                    price={299000} 
                    durationInMonth={3}
                    features={["feature 1", "feature 2", "feature 3"]}
                    />
                    {/* For Greatest */}
                    <SubscriptionCard isPremium 
                    name="Premium" 
                    price={499000} 
                    durationInMonth={12}
                    features={["feature 1", "feature 2", "feature 3"]}/>
                </div>
                {/* Pricing Card */}
            </div>
    </Authenticated>
}