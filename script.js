import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '120s',
};

export default function () {
  http.get('https://luftkvalitetapi-t.miljodirektoratet.no/api/manualforecast/admin/meteorology?stationId=NO0142A');
  //http.get('https://luftkvalitetapi-t.miljodirektoratet.no/api/manualforecast/forecasts/Oslo/Oslo');
  //http.get('https://luftkvalitetapi-t.miljodirektoratet.no/api/forecast/topcities');
  sleep(0.5);
}
