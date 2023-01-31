import { TouchableOpacity, Dimensions, TouchableOpacityProps } from "react-native";
import clsx from "clsx";
import { generateProgressPercentage } from "../utils/generate-progress-percentage";
import dayjs from "dayjs";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;
export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface Props extends TouchableOpacityProps {
    amountOfHabits?: number;
    amountCompleted?: number;
    date: Date;
};

export function HabitDay({amountCompleted = 0, amountOfHabits = 0, date, ...rest }: Props) {
    const amountAccomplishedPercentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0;
    const today = dayjs().startOf('day').toDate();
    const isCurrentDay = dayjs(date).isSame(today);
    return (
        <TouchableOpacity
            className={clsx("rounded-lg border-2 m-1", {
                ["bg-neutral-900 border-neutral-800"] : amountAccomplishedPercentage === 0,
                ["bg-cyan-900 border-cyan-700"] : amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20,
                ["bg-cyan-800 border-cyan-600"] : amountAccomplishedPercentage > 20 && amountAccomplishedPercentage < 40,
                ["bg-cyan-700 border-cyan-500"] : amountAccomplishedPercentage > 40 && amountAccomplishedPercentage < 60,
                ["bg-cyan-600 border-cyan-500"] : amountAccomplishedPercentage > 60 && amountAccomplishedPercentage < 80,
                ["bg-cyan-500 border-cyan-400"] : amountAccomplishedPercentage > 80,
                ["border-white borer-4"] : isCurrentDay,


            })}
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
            activeOpacity={0.7}
            {...rest}
        />
    )
} 