# react-supabase-auth

En lille React-app til at øve login med Supabase Auth, før du laver step 14 i [chatbot-tutorialen](https://github.com/bewildergeist/chatbot-react-postgres/pull/14). Opgaven står i [React Supabase Auth](https://github.com/cederdorff/wu-e26a/blob/main/opgaver/react-supabase-auth.md).

Appen bruger samme opsætning som chatbotten: React Router i SPA-mode med `clientAction` og `clientLoader`.

## Kom i gang

Følg [øvelse 1 i opgaven](https://github.com/cederdorff/wu-e26a/blob/main/opgaver/react-supabase-auth.md#øvelse-1-hent-startprojektet).

## Løsninger

Hver øvelse har sin egen branch. Branchen viser projektet, som det ser ud, når hele øvelsen er løst. Øvelse 4, 5 og 8 er delt i trin. Løsningsforslaget til hvert trin står i opgaven. Klik på "diff" for kun at se det, der er nyt i den øvelse.

`main` er startpunktet.

| Øvelse | Branch | Ændring |
| --- | --- | --- |
| 1 · Hent startprojektet | [main](https://github.com/cederdorff/react-supabase-auth/tree/main) | |
| 2 · Supabase-klienten | [ovelse-02-supabase-klient](https://github.com/cederdorff/react-supabase-auth/tree/ovelse-02-supabase-klient) | [diff](https://github.com/cederdorff/react-supabase-auth/compare/main...ovelse-02-supabase-klient) |
| 3 · Routes til login og register | [ovelse-03-routes](https://github.com/cederdorff/react-supabase-auth/tree/ovelse-03-routes) | [diff](https://github.com/cederdorff/react-supabase-auth/compare/ovelse-02-supabase-klient...ovelse-03-routes) |
| 4 · Opret en bruger | [ovelse-04-register](https://github.com/cederdorff/react-supabase-auth/tree/ovelse-04-register) | [diff](https://github.com/cederdorff/react-supabase-auth/compare/ovelse-03-routes...ovelse-04-register) |
| 5 · Validering | [ovelse-05-validering](https://github.com/cederdorff/react-supabase-auth/tree/ovelse-05-validering) | [diff](https://github.com/cederdorff/react-supabase-auth/compare/ovelse-04-register...ovelse-05-validering) |
| 6 · Log ind | [ovelse-06-login](https://github.com/cederdorff/react-supabase-auth/tree/ovelse-06-login) | [diff](https://github.com/cederdorff/react-supabase-auth/compare/ovelse-05-validering...ovelse-06-login) |
| 7 · Kig i dit JWT | Ingen kode | |
| 8 · Profilside | [ovelse-08-profil](https://github.com/cederdorff/react-supabase-auth/tree/ovelse-08-profil) | [diff](https://github.com/cederdorff/react-supabase-auth/compare/ovelse-06-login...ovelse-08-profil) |
| 9 · Log ud | [ovelse-09-logout](https://github.com/cederdorff/react-supabase-auth/tree/ovelse-09-logout) | [diff](https://github.com/cederdorff/react-supabase-auth/compare/ovelse-08-profil...ovelse-09-logout) |

## Kør en løsning

```bash
git clone https://github.com/cederdorff/react-supabase-auth.git
cd react-supabase-auth
git switch ovelse-09-logout
npm install
```

Kopiér `.env.example` til en ny fil, `.env`, og udfyld den med dine egne Supabase-værdier. Start projektet med `npm run dev`.

Skift `ovelse-09-logout` ud med den øvelse, du vil se.

Prøv selv først. Brug løsningen, når du sidder fast, eller når du vil sammenligne med din egen.
