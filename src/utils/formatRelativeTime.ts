import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatRelativeTime = (date: Date) => {
   const now = new Date();
   const diffInMilliseconds = date.getTime() - now.getTime();

   const isFuture = diffInMilliseconds > 0;

   const formattedTime = formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR,
   });

   if (isFuture) {
      return formattedTime.replace("em ", "daqui a ");
   }

   return formattedTime;
};
