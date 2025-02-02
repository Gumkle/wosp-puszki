import { Typography, Space, Button } from 'antd';
import s from './AcceptDataCard.module.less';

type AcceptData = {
  id_box: number;
  id_number: number;
  volunteer: string;
  type: 'box' | 'case';
  onAccept: () => void;
};

const { Text, Title } = Typography;

export const AcceptDataCard = ({
  id_box,
  id_number,
  volunteer,
  type,
  onAccept,
}: AcceptData) => {
  return (
    <div className={s.AcceptDataCard}>
      <Title level={4}>
        Znaleziono {type === 'box' ? 'puszkę' : 'skarbonkę'}: {id_box}
      </Title>
      <Space className={s.DataLabels}>
        <Space className={s.LabelTop}>
          <Text>Wolontariusz</Text>
          <Text>{volunteer}</Text>
        </Space>
        <Space className={s.Label}>
          <Text>Numer identyfikatora i na puszce</Text>
          <Text>{id_number}</Text>
        </Space>
        <Space className={s.Label}>
          <Text>ID puszki w bazie</Text>
          <Text>{id_box}</Text>
        </Space>
      </Space>
      <Space className={s.InfoSection}>
        <div className={s.InfoNote} style={{ gap: '0px' }}>
          <p>Potwierdź, że dane z puszki i identyfikatora sq zgodne z wyświetlonymi.</p>
          <p>Potwierdź, że puszka nie nosi śladów uszkodzeń.</p>
          <p>Nie oddawaj rozliczonej puszki wolontariuszowi.</p>
        </div>
        <Button type={'primary'} className={s.AcceptBtn} onClick={onAccept}>
          Potwierdzam Zgodność z danymi rzeczywistymi
        </Button>
      </Space>
    </div>
  );
};
