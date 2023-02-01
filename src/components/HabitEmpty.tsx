import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

export function HabitEmpty() {
    const {navigate} = useNavigation();
    return(
        <Text className='text-neutral-400 text-base text-center'>
            Você ainda não possui monitoramentos. {"\n"}
            <Text className='text-cyan-400 text-base underline active:text-cyan-500'
                onPress={() => navigate('new')}
            >
                Comece criando um hábito
            </Text>
        </Text>
    );
}