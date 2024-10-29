import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Header from '../header/Header';
import { HEADER_LINKS } from '../../utils';
import { WarningRounded } from '@mui/icons-material';

type CardProps = {
  [key: string]: string | number | any;
};
function MediaCard({ data }: CardProps) {
  console.log(data.error);
  return (
    <>
      <Header title='Flight View' links={HEADER_LINKS} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        {data.error && (
          <Card sx={{ width: 380, height: '60vh' }}>
            <CardContent sx={{ backgroundColor: '#FF573374', color: 'red', display: 'inline-block', justifyContent: 'center' }}>
              <WarningRounded sx={{color: 'red'}}/>
              <Typography gutterBottom variant='h6' component='div'>
                {data.error}
              </Typography>
              <div><p>The requested flight details are unavailable</p></div>
            </CardContent>
          </Card>
        )}
        {!data.error && (
          <Card sx={{ width: 380, height: '60vh' }}>
            <CardContent sx={{ backgroundColor: '#0064D2', color: '#fff' }}>
              <Typography gutterBottom variant='h4' component='div'>
                {data.airline}
              </Typography>
              <Typography variant='body2'>{data.destination}</Typography>
            </CardContent>
            <CardContent
              sx={{
                display: 'grid',
                alignItems: 'center',
                height: 'calc(100% - 20vh)',
              }}
            >
              {[
                { label: 'Flight Number', value: data.flightNumber },
                { label: 'Origin', value: data.origin },
                {
                  label: 'Departure Time',
                  value: new Date(data.departureTime).toLocaleString(),
                },
                { label: 'Status', value: data.status },
              ].map((item, index) => (
                <Typography
                  sx={{ justifySelf: 'start' }}
                  key={index}
                  variant='body1'
                >
                  <b>{item.label}</b>: {item.value}
                </Typography>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}

export default MediaCard;
