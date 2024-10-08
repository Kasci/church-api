export class Readings {
    week: number;
    day: number;
    dayWeek: string;
    dayName: string;
    epistle?: string;
    gospel?: string;
    altEpistle?: string;
    altGospel?: string;
};

let readings: Readings[] = [
	{week:1, day:1, dayWeek:"Pondelok", dayName:"Pondelok 1. týždňa po ZSD", epistle:"Ef §229 (5:8b-19)", gospel:"Mt §75 (18:10-20)"},
	{week:1, day:2, dayWeek:"Utorok", dayName:"Utorok 1. týždňa po ZSD", epistle:"Rim §79 (1:1-7, 13-17)", gospel:"Mt §10 (4:25-5:12a)"},
	{week:1, day:3, dayWeek:"Streda", dayName:"Streda 1. týždňa po ZSD", epistle:"Rim §80 (1:18-27)", gospel:"Mt §12 (5:20-26)"},
	{week:1, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 1. týždňa po ZSD", epistle:"Rim §81 (1:28-2:9)", gospel:"Mt §13 (5:27-32)"},
	{week:1, day:5, dayWeek:"Piatok", dayName:"Piatok 1. týždňa po ZSD", epistle:"Rim §82 (2:14-29)", gospel:"Mt §14 (5:33-41)"},
	{week:1, day:6, dayWeek:"Sobota", dayName:"Sobota 1. týždňa po ZSD", epistle:"Rim §79a (1:7b-12)", gospel:"Mt §15 (5:42-48)"},
	{week:1, day:0, dayWeek:"Nedeľa", dayName:"1. nedeľa po ZSD", epistle:"Heb §330 (11:33-12:2a)", gospel:"Mt §38 (10:32-33, 37-38; 19:27-30)"},
	{week:2, day:1, dayWeek:"Pondelok", dayName:"Pondelok 2. týždňa po ZSD", epistle:"Rim §83 (2:28-3:18)", gospel:"Mt §19 (6:31-34;7:9-11)"},
	{week:2, day:2, dayWeek:"Utorok", dayName:"Utorok 2. týždňa po ZSD", epistle:"Rim §86 (4:4-12)", gospel:"Mt §22 (7:15-21)"},
	{week:2, day:3, dayWeek:"Streda", dayName:"Streda 2. týždňa po ZSD", epistle:"Rim §87 (4:13-25)", gospel:"Mt §23 (7:21-23)"},
	{week:2, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 2. týždňa po ZSD", epistle:"Rim §89 (5:10-16)", gospel:"Mt §27 (8:23-27)"},
	{week:2, day:5, dayWeek:"Piatok", dayName:"Piatok 2. týždňa po ZSD", epistle:"Rim §90 (5:17-6:2)", gospel:"Mt §31 (9:14-17)"},
	{week:2, day:6, dayWeek:"Sobota", dayName:"Sobota 2. týždňa po ZSD", epistle:"Rim §84 (3:19-26)", gospel:"Mt §20 (7:1-8)"},
	{week:2, day:0, dayWeek:"Nedeľa", dayName:"2. nedeľa po ZSD", epistle:"Rim §81a (2:10-16)", gospel:"Mt §9 (4:18-23)"},
	{week:3, day:1, dayWeek:"Pondelok", dayName:"Pondelok 3. týždňa po ZSD", epistle:"Rim §94 (7:1-13)", gospel:"Mt §34 (9:36-10:8)"},
	{week:3, day:2, dayWeek:"Utorok", dayName:"Utorok 3. týždňa po ZSD", epistle:"Rim §95 (7:14-8:2)", gospel:"Mt §35 (10:9-15)"},
	{week:3, day:3, dayWeek:"Streda", dayName:"Streda 3. týždňa po ZSD", epistle:"Rim §96 (8:2-13)", gospel:"Mt §36 (10:16-22)"},
	{week:3, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 3. týždňa po ZSD", epistle:"Rim §98 (8:22-27)", gospel:"Mt §37 (10:23-31)"},
	{week:3, day:5, dayWeek:"Piatok", dayName:"Piatok 3. týždňa po ZSD", epistle:"Rim §101 (9:6-19)", gospel:"Mt §38 (10:32-36; 11:1)"},
	{week:3, day:6, dayWeek:"Sobota", dayName:"Sobota 3. týždňa po ZSD", epistle:"Rim §85 (3:28-4:3)", gospel:"Mt §24 (7:24-8:4)"},
	{week:3, day:0, dayWeek:"Nedeľa", dayName:"3. nedeľa po ZSD", epistle:"Rim §88 (5:1-10)", gospel:"Mt §18 (6:22-34)"},
	{week:4, day:1, dayWeek:"Pondelok", dayName:"Pondelok 4. týždňa po ZSD", epistle:"Rim §102 (9:18-23)", gospel:"Mt §40 (11:2-15)"},
	{week:4, day:2, dayWeek:"Utorok", dayName:"Utorok 4. týždňa po ZSD", epistle:"Rim §104 (10:11-11:2a)", gospel:"Mt §41 (11:16-20)"},
	{week:4, day:3, dayWeek:"Streda", dayName:"Streda 4. týždňa po ZSD", epistle:"Rim §105 (11:2b-12)", gospel:"Mt §42 (11:20-26)"},
	{week:4, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 4. týždňa po ZSD", epistle:"Rim §106 (11:13-24)", gospel:"Mt §43 (11:27-30)"},
	{week:4, day:5, dayWeek:"Piatok", dayName:"Piatok 4. týždňa pzo ZSD", epistle:"Rim §107 (11:25-36)", gospel:"Mt §44 (12:1-8)"},
	{week:4, day:6, dayWeek:"Sobota", dayName:"Sobota 4. týždňa po ZSD", epistle:"Rim §92 (6:11-17)", gospel:"Mt §26 (8:14-23)"},
	{week:4, day:0, dayWeek:"Nedeľa", dayName:"4. nedeľa po ZSD", epistle:"Rim §93 (6:18-23)", gospel:"Mt §25 (8:5-13)"},
	{week:5, day:1, dayWeek:"Pondelok", dayName:"Pondelok 5. týždňa po ZSD", epistle:"Rim §109 (12:4-5, 15-21)", gospel:"Mt §45 (12:9-13)"},
	{week:5, day:2, dayWeek:"Utorok", dayName:"Utorok 5. týždňa po ZSD", epistle:"Rim §114 (14:9-18)", gospel:"Mt §46 (12:14-16, 22-30)"},
	{week:5, day:3, dayWeek:"Streda", dayName:"Streda 5. týždňa po ZSD", epistle:"Rim §117 (15:7-16)", gospel:"Mt §48 (12:38-45)"},
	{week:5, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 5. týždňa po ZSD", epistle:"Rim §118 (15:17-29)", gospel:"Mt §49 (12:46-13:3a)"},
	{week:5, day:5, dayWeek:"Piatok", dayName:"Piatok 5. týždňa po ZSD", epistle:"Rim §120 (16:1-16)", gospel:"Mt §50 (13:3b-9)"},
	{week:5, day:6, dayWeek:"Sobota", dayName:"Sobota 5. týždňa po ZSD", epistle:"Rim §97 (8:14-21)", gospel:"Mt §30 (9:9-13)"},
	{week:5, day:0, dayWeek:"Nedeľa", dayName:"5. nedeľa po ZSD", epistle:"Rim §103 (10:1-10)", gospel:"Mt §28 (8:28-9:1)"},
	{week:6, day:1, dayWeek:"Pondelok", dayName:"Pondelok 6. týždňa po ZSD", epistle:"Rim §121 (16:17-24)", gospel:"Mt §51 (13:10-23)"},
	{week:6, day:2, dayWeek:"Utorok", dayName:"Utorok 6. týždňa po ZSD", epistle:"1 Kor §122 (1:1-9)", gospel:"Mt §52 (13:24-30)"},
	{week:6, day:3, dayWeek:"Streda", dayName:"Streda 6. týždňa po ZSD", epistle:"1 Kor §127 (2:9-3:8)", gospel:"Mt §53 (13:31-36a)"},
	{week:6, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 6. týždňa po ZSD", epistle:"1 Kor §129 (3:18-23)", gospel:"Mt §54 (13:36b-43)"},
	{week:6, day:5, dayWeek:"Piatok", dayName:"Piatok 6. týždňa po ZSD", epistle:"1 Kor §130a (4:5-8)", gospel:"Mt §55 (13:44-54a)"},
	{week:6, day:6, dayWeek:"Sobota", dayName:"Sobota 6. týždňa po ZSD", epistle:"Rim §100 (9:1-5)", gospel:"Mt §32 (9:18-26)"},
	{week:6, day:0, dayWeek:"Nedeľa", dayName:"6. nedeľa po ZSD", epistle:"Rim §110 (12:6-14)", gospel:"Mt §29 (9:1-8)"},
	{week:7, day:1, dayWeek:"Pondelok", dayName:"Pondelok 7. týždňa po ZSD", epistle:"1 Kor §134 (5:9-6:11)", gospel:"Mt §56 (13:54-58)"},
	{week:7, day:2, dayWeek:"Utorok", dayName:"Utorok 7. týždňa po ZSD", epistle:"1 Kor §136 (6:20b-7:12)", gospel:"Mt §57 (14:1-13)"},
	{week:7, day:3, dayWeek:"Streda", dayName:"Streda 7. týždňa po ZSD", epistle:"1 Kor §137 (7:12b-24)", gospel:"Mt §60 (14:35-15:11)"},
	{week:7, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 7. týždňa po ZSD", epistle:"1 Kor §138 (7:24-35)", gospel:"Mt §61 (15:12-21)"},
	{week:7, day:5, dayWeek:"Piatok", dayName:"Piatok 7. týždňa po ZSD", epistle:"1 Kor §139 (7:35-8:7)", gospel:"Mt §63 (15:29-31)"},
	{week:7, day:6, dayWeek:"Sobota", dayName:"Sobota 7. týždňa po ZSD", epistle:"Rim §108 (12:1-3)", gospel:"Mt §39 (10:37-11:1)"},
	{week:7, day:0, dayWeek:"Nedeľa", dayName:"7. nedeľa po ZSD", epistle:"Rim §116 (15:1-7)", gospel:"Mt §33 (9:27-35)"},
	{week:8, day:1, dayWeek:"Pondelok", dayName:"Pondelok 8. týždňa po ZSD", epistle:"1 Kor §142 (9:13-18)", gospel:"Mt §65 (16:1-6)"},
	{week:8, day:2, dayWeek:"Utorok", dayName:"Utorok 8. týždňa po ZSD", epistle:"1 Kor §144 (10:5-12)", gospel:"Mt §66 (16:6-12)"},
	{week:8, day:3, dayWeek:"Streda", dayName:"Streda 8. týždňa po ZSD", epistle:"1 Kor §145 (10:12-22)", gospel:"Mt §68 (16:20-24)"},
	{week:8, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 8. týždňa po ZSD", epistle:"1 Kor §147 (10:28-11:7)", gospel:"Mt §69 (16:24-28)"},
	{week:8, day:5, dayWeek:"Piatok", dayName:"Piatok 8. týždňa po ZSD", epistle:"1 Kor §148 (11:8-22)", gospel:"Mt §71 (17:10-18)"},
	{week:8, day:6, dayWeek:"Sobota", dayName:"Sobota 8. týždňa po ZSD", epistle:"Rim §111 (13:1-10)", gospel:"Mt §47 (12:30-37)"},
	{week:8, day:0, dayWeek:"Nedeľa", dayName:"8. nedeľa po ZSD", epistle:"1 Kor §124 (1:10-18)", gospel:"Mt §58 (14:14-22)"},
	{week:9, day:1, dayWeek:"Pondelok", dayName:"Pondelok 9. týždňa po ZSD", epistle:"1 Kor §150 (11:31-12:6)", gospel:"Mt §74 (18:1-10)"},
	{week:9, day:2, dayWeek:"Utorok", dayName:"Utorok 9. týždňa po ZSD", epistle:"1 Kor §152 (12:12-26)", gospel:"Mt §76 (18:18-22; 19:1-2, 13-15)"},
	{week:9, day:3, dayWeek:"Streda", dayName:"Streda 9. týždňa po ZSD", epistle:"1 Kor §154 (13:4-14:5)", gospel:"Mt §80 (20:1-16)"},
	{week:9, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 9. týždňa po ZSD", epistle:"1 Kor §155 (14:6-19)", gospel:"Mt §81 (20:17-28)"},
	{week:9, day:5, dayWeek:"Piatok", dayName:"Piatok 9. týždňa po ZSD", epistle:"1 Kor §157 (14:26-40)", gospel:"Mt §83a (21:12-14, 17-20)"},
	{week:9, day:6, dayWeek:"Sobota", dayName:"Sobota 9. týždňa po ZSD", epistle:"Rim §113 (14:6-9)", gospel:"Mt §64 (15:32-39)"},
	{week:9, day:0, dayWeek:"Nedeľa", dayName:"9. nedeľa po ZSD", epistle:"1 Kor §128 (3:9-17)", gospel:"Mt §59 (14:22-34)"},
	{week:10, day:1, dayWeek:"Pondelok", dayName:"Pondelok 10. týždňa po ZSD", epistle:"1 Kor §159 (15:12-19)", gospel:"Mt §84 (21:18-22)"},
	{week:10, day:2, dayWeek:"Utorok", dayName:"Utorok 10. týždňa po ZSD", epistle:"1 Kor §161 (15:29-38)", gospel:"Mt §85 (21:23-27)"},
	{week:10, day:3, dayWeek:"Streda", dayName:"Streda 10. týždňa po ZSD", epistle:"1 Kor §165 (16:4-12)", gospel:"Mt §86 (21:28-32)"},
	{week:10, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 10. týždňa po ZSD", epistle:"2 Kor §167 (1:1-6)", gospel:"Mt §88 (21:43-46)"},
	{week:10, day:5, dayWeek:"Piatok", dayName:"Piatok 10. týždňa po ZSD", epistle:"2 Kor §169 (1:12-20)", gospel:"Mt §91 (22:23-33)"},
	{week:10, day:6, dayWeek:"Sobota", dayName:"Sobota 10. týždňa po ZSD", epistle:"Rim §119 (15:30-33)", gospel:"Mt §73 (17:24-18:4)"},
	{week:10, day:0, dayWeek:"Nedeľa", dayName:"10. nedeľa po ZSD", epistle:"1 Kor §131 (4:9-16)", gospel:"Mt §72 (17:14-23a)"},
	{week:11, day:1, dayWeek:"Pondelok", dayName:"Pondelok 11. týždňa po ZSD", epistle:"2 Kor §171 (2:3b-15a)", gospel:"Mt §94 (23:13-22)"},
	{week:11, day:2, dayWeek:"Utorok", dayName:"Utorok 11. týždňa po ZSD", epistle:"2 Kor §172 (2:14-3:3)", gospel:"Mt §95 (23:23-28)"},
	{week:11, day:3, dayWeek:"Streda", dayName:"Streda 11. týždňa po ZSD", epistle:"2 Kor §173 (3:4-11)", gospel:"Mt §96 (23:29-39)"},
	{week:11, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 11. týždňa po ZSD", epistle:"2 Kor §175 (4:1-6)", gospel:"Mt §99 (24:13-28)"},
	{week:11, day:5, dayWeek:"Piatok", dayName:"Piatok 11. týždňa po ZSD", epistle:"2 Kor §177 (4:13-18)", gospel:"Mt §100 (24:27-33, 42-51)"},
	{week:11, day:6, dayWeek:"Sobota", dayName:"Sobota 11. týždňa po ZSD", epistle:"1 Kor §123 (1:3-9)", gospel:"Mt §78 (19:3-12)"},
	{week:11, day:0, dayWeek:"Nedeľa", dayName:"11. nedeľa po ZSD", epistle:"1 Kor §141 (9:2b-12)", gospel:"Mt §77 (18:23-35)"},
	{week:12, day:1, dayWeek:"Pondelok", dayName:"Pondelok 12. týždňa po ZSD", epistle:"2 Kor §179 (5:10-15)", gospel:"Mk §2 (1:9-15)"},
	{week:12, day:2, dayWeek:"Utorok", dayName:"Utorok 12. týždňa po ZSD", epistle:"2 Kor §180 (5:15-21)", gospel:"Mk §3 (1:16-22)"},
	{week:12, day:3, dayWeek:"Streda", dayName:"Streda 12. týždňa po ZSD", epistle:"2 Kor §182 (6:11-16a)", gospel:"Mk §4 (1:23-28)"},
	{week:12, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 12. týždňa po ZSD", epistle:"2 Kor §183 (7:1b-10a)", gospel:"Mk §5 (1:29-35)"},
	{week:12, day:5, dayWeek:"Piatok", dayName:"Piatok 12. týždňa po ZSD", epistle:"2 Kor §184 (7:10-16)", gospel:"Mk §9 (2:18-22)"},
	{week:12, day:6, dayWeek:"Sobota", dayName:"Sobota 12. týždňa po ZSD", epistle:"1 Kor §125a (1:26-29)", gospel:"Mt §82 (20:29-34)"},
	{week:12, day:0, dayWeek:"Nedeľa", dayName:"12. nedeľa po ZSD", epistle:"1 Kor §158 (15:1-11)", gospel:"Mt §79 (19:16-26)"},
	{week:13, day:1, dayWeek:"Pondelok", dayName:"Pondelok 13. týždňa po ZSD", epistle:"2 Kor §186 (8:7-15)", gospel:"Mk §11 (3:6-12)"},
	{week:13, day:2, dayWeek:"Utorok", dayName:"Utorok 13. týždňa po ZSD", epistle:"2 Kor §187 (8:16-9:5)", gospel:"Mk §12 (3:13-19a)"},
	{week:13, day:3, dayWeek:"Streda", dayName:"Streda 13. týždňa po ZSD", epistle:"2 Kor §189 (9:12-10:7)", gospel:"Mk §13 (3:20-27)"},
	{week:13, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 13. týždňa po ZSD", epistle:"2 Kor §190 (10:7b-18)", gospel:"Mk §14 (3:28-35)"},
	{week:13, day:5, dayWeek:"Piatok", dayName:"Piatok 13. týždňa po ZSD", epistle:"2 Kor §192 (11:5-21a)", gospel:"Mk §15 (4:1-9)"},
	{week:13, day:6, dayWeek:"Sobota", dayName:"Sobota 13. týždňa po ZSD", epistle:"1 Kor §126 (2:6-9)", gospel:"Mt §90 (22:15-22)"},
	{week:13, day:0, dayWeek:"Nedeľa", dayName:"13. nedeľa po ZSD", epistle:"1 Kor §166 (16:13-24)", gospel:"Mt §87 (21:33-42)"},
	{week:14, day:1, dayWeek:"Pondelok", dayName:"Pondelok 14. týždňa po ZSD", epistle:"2 Kor §195 (12:10-19)", gospel:"Mk §16 (4:10-23)"},
	{week:14, day:2, dayWeek:"Utorok", dayName:"Utorok 14. týždňa po ZSD", epistle:"2 Kor §196 (12:20-13:2)", gospel:"Mk §17 (4:24-34)"},
	{week:14, day:3, dayWeek:"Streda", dayName:"Streda 14. týždňa po ZSD", epistle:"2 Kor §197 (13:3-13)", gospel:"Mk §18 (4:35-41)"},
	{week:14, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 14. týždňa po ZSD", epistle:"Gal §198 (1:1-10, 1:20-2:5)", gospel:"Mk §19 (5:1-20)"},
	{week:14, day:5, dayWeek:"Piatok", dayName:"Piatok 14. týždňa po ZSD", epistle:"Gal §201 (2:6-10)", gospel:"Mk §20 (5:22-25, 5:35-6:1)"},
	{week:14, day:6, dayWeek:"Sobota", dayName:"Sobota 14. týždňa po ZSD", epistle:"1 Kor §130 (4:1-5)", gospel:"Mt §93 (23:1-12)"},
	{week:14, day:0, dayWeek:"Nedeľa", dayName:"14. nedeľa po ZSD", epistle:"2 Kor §170 (1:21-2:4)", gospel:"Mt §89 (22:1-14)"},
	{week:15, day:1, dayWeek:"Pondelok", dayName:"Pondelok 15. týždňa po ZSD", epistle:"Gal §202 (2:11-16)", gospel:"Mk §21 (5:24b-34)"},
	{week:15, day:2, dayWeek:"Utorok", dayName:"Utorok 15. týždňa po ZSD", epistle:"Gal §204 (2:21-3:7)", gospel:"Mk §22 (6:1-7)"},
	{week:15, day:3, dayWeek:"Streda", dayName:"Streda 15. týždňa po ZSD", epistle:"Gal §207 (3:15-22)", gospel:"Mk §23 (6:7-13)"},
	{week:15, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 15. týždňa po ZSD", epistle:"Gal §208 (3:23-4:5)", gospel:"Mk §25 (6:30-45)"},
	{week:15, day:5, dayWeek:"Piatok", dayName:"Piatok 15. týždňa po ZSD", epistle:"Gal §210 (4:8-21)", gospel:"Mk §26 (6:45-53)"},
	{week:15, day:6, dayWeek:"Sobota", dayName:"Sobota 15. týždňa po ZSD", epistle:"1 Kor §132 (4:17-5:5)", gospel:"Mt §97 (24:1-13)"},
	{week:15, day:0, dayWeek:"Nedeľa", dayName:"15. nedeľa po ZSD", epistle:"2 Kor §176 (4:6-15)", gospel:"Mt §92 (22:35-46)"},
	{week:16, day:1, dayWeek:"Pondelok", dayName:"Pondelok 16. týždňa po ZSD", epistle:"Gal §211 (4:28-5:10)", gospel:"Mk §27 (6:54-7:8a)"},
	{week:16, day:2, dayWeek:"Utorok", dayName:"Utorok 16. týždňa po ZSD", epistle:"Gal §212 (5:11-21)", gospel:"Mk §28 (7:5-16)"},
	{week:16, day:3, dayWeek:"Streda", dayName:"Streda 16. týždňa po ZSD", epistle:"Gal §214 (6:2-10)", gospel:"Mk §29 (7:14-24a)"},
	{week:16, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 16. týždňa po ZSD", epistle:"Ef §216 (1:1-9)", gospel:"Mk §30 (7:24-30)"},
	{week:16, day:5, dayWeek:"Piatok", dayName:"Piatok 16. týždňa po ZSD", epistle:"Ef §217 (1:7-17)", gospel:"Mk §32 (8:1-10)"},
	{week:16, day:6, dayWeek:"Sobota", dayName:"Sobota 16. týždňa po ZSD", epistle:"1 Kor §146 (10:23-28)", gospel:"Mt §101 (24:34-44)"},
	{week:16, day:0, dayWeek:"Nedeľa", dayName:"16. nedeľa po ZSD", epistle:"2 Kor §181 (6:1-10)", gospel:"Mt §105 (25:14-30)"},
	{week:17, day:1, dayWeek:"Pondelok", dayName:"Pondelok 17. týždňa po ZSD", epistle:"Ef §219 (1:22-2:3)", gospel:"Mk §48 (10:46-52)"},
	{week:17, day:2, dayWeek:"Utorok", dayName:"Utorok 17. týždňa po ZSD", epistle:"Ef §222 (2:19-3:7)", gospel:"Mk §50 (11:11-23)"},
	{week:17, day:3, dayWeek:"Streda", dayName:"Streda 17. týždňa po ZSD", epistle:"Ef §223 (3:8-21)", gospel:"Mk §51 (11:23-26)"},
	{week:17, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 17. týždňa po ZSD", epistle:"Ef §225 (4:14-19)", gospel:"Mk §52 (11:27-33)"},
	{week:17, day:5, dayWeek:"Piatok", dayName:"Piatok 17. týždňa po ZSD", epistle:"Ef §226 (4:17-25a)", gospel:"Mk §53 (12:1-12)"},
	{week:17, day:6, dayWeek:"Sobota", dayName:"Sobota 17. týždňa po ZSD", epistle:"1 Kor §156 (14:20-25)", gospel:"Mt §104 (25:1-13)"},
	{week:17, day:0, dayWeek:"Nedeľa", dayName:"17. nedeľa po ZSD", epistle:"2 Kor §182a (6:16b-7:1)", gospel:"Mt §62 (15:21-28)"},
	{week:18, day:1, dayWeek:"Pondelok", dayName:"Pondelok 18. týždňa po ZSD", epistle:"Ef §227 (4:25-32)", gospel:"Lk §10 (3:19-22)"},
	{week:18, day:2, dayWeek:"Utorok", dayName:"Utorok 18. týždňa po ZSD", epistle:"Ef §230 (5:20-26)", gospel:"Lk §11 (3:23-4:1)"},
	{week:18, day:3, dayWeek:"Streda", dayName:"Streda 18. týždňa po ZSD", epistle:"Ef §231 (5:25-33a)", gospel:"Lk §12 (4:1-15)"},
	{week:18, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 18. týždňa po ZSD", epistle:"Ef §232 (5:33-6:9)", gospel:"Lk §13 (4:16-22a)"},
	{week:18, day:5, dayWeek:"Piatok", dayName:"Piatok 18. týždňa po ZSD", epistle:"Ef §234 (6:18-24)", gospel:"Lk §14 (4:22-30)"},
	{week:18, day:6, dayWeek:"Sobota", dayName:"Sobota 18. týždňa po ZSD", epistle:"1 Kor §162 (15:39-45)", gospel:"Lk §15 (4:31-36)"},
	{week:18, day:0, dayWeek:"Nedeľa", dayName:"18. nedeľa po ZSD", epistle:"2 Kor §188 (9:6-11)", gospel:"Lk §17 (5:1-11)"},
	{week:19, day:1, dayWeek:"Pondelok", dayName:"Pondelok 19. týždňa po ZSD", epistle:"Flp §235 (1:1-7)", gospel:"Lk §16 (4:37-44)"},
	{week:19, day:2, dayWeek:"Utorok", dayName:"Utorok 19. týždňa po ZSD", epistle:"Flp §236 (1:8-14)", gospel:"Lk §18 (5:12-16)"},
	{week:19, day:3, dayWeek:"Streda", dayName:"Streda 19. týždňa po ZSD", epistle:"Flp §237 (1:12-20a)", gospel:"Lk §21 (5:33-39)"},
	{week:19, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 19. týždňa po ZSD", epistle:"Flp §238 (1:20b-27a)", gospel:"Lk §23 (6:12-19)"},
	{week:19, day:5, dayWeek:"Piatok", dayName:"Piatok 19. týždňa po ZSD", epistle:"Flp §239 (1:27-2:4)", gospel:"Lk §24 (6:17-23a)"},
	{week:19, day:6, dayWeek:"Sobota", dayName:"Sobota 19. týždňa po ZSD", epistle:"1 Kor §164 (15:58-16:3)", gospel:"Lk §19 (5:17-26)"},
	{week:19, day:0, dayWeek:"Nedeľa", dayName:"19. nedeľa po ZSD", epistle:"2 Kor §194 (11:31-12:9)", gospel:"Lk §26 (6:31-36)"},
	{week:20, day:1, dayWeek:"Pondelok", dayName:"Pondelok 20. týždňa po ZSD", epistle:"Flp §241 (2:12-16a)", gospel:"Lk §25 (6:24-30)"},
	{week:20, day:2, dayWeek:"Utorok", dayName:"Utorok 20. týždňa po ZSD", epistle:"Flp §242 (2:16b-23)", gospel:"Lk §27 (6:37-45)"},
	{week:20, day:3, dayWeek:"Streda", dayName:"Streda 20. týždňa po ZSD", epistle:"Flp §243 (2:24-30)", gospel:"Lk §28 (6:46-7:1)"},
	{week:20, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 20. týždňa po ZSD", epistle:"Flp §244 (3:1-8)", gospel:"Lk §31 (7:17-30)"},
	{week:20, day:5, dayWeek:"Piatok", dayName:"Piatok 20. týždňa po ZSD", epistle:"Flp §245 (3:8b-19)", gospel:"Lk §32 (7:31-35)"},
	{week:20, day:6, dayWeek:"Sobota", dayName:"Sobota 20. týždňa po ZSD", epistle:"2 Kor §168 (1:8-11)", gospel:"Lk §20 (5:27-32)"},
	{week:20, day:0, dayWeek:"Nedeľa", dayName:"20. nedeľa po ZSD", epistle:"Gal §200 (1:11-19)", gospel:"Lk §30 (7:11-16)"},
	{week:21, day:1, dayWeek:"Pondelok", dayName:"Pondelok 21. týždňa po ZSD", epistle:"Flp §248 (4:10-23)", gospel:"Lk §33 (7:36-50)"},
	{week:21, day:2, dayWeek:"Utorok", dayName:"Utorok 21. týždňa po ZSD", epistle:"Kol §249 (1:1-2a, 7-11)", gospel:"Lk §34 (8:1-3)"},
	{week:21, day:3, dayWeek:"Streda", dayName:"Streda 21. týždňa po ZSD", epistle:"Kol §251 (1:18-23)", gospel:"Lk §37 (8:22-25)"},
	{week:21, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 21. týždňa po ZSD", epistle:"Kol §252 (1:24-29)", gospel:"Lk §41 (9:7-11)"},
	{week:21, day:5, dayWeek:"Piatok", dayName:"Piatok 21. týždňa po ZSD", epistle:"Kol §253 (2:1-7)", gospel:"Lk §42 (9:12b-18a)"},
	{week:21, day:6, dayWeek:"Sobota", dayName:"Sobota 21. týždňa po ZSD", epistle:"2 Kor §174 (3:12-18)", gospel:"Lk §22 (6:1-10)"},
	{week:21, day:0, dayWeek:"Nedeľa", dayName:"21. nedeľa po ZSD", epistle:"Gal §203 (2:16-20)", gospel:"Lk §35 (8:5-15)"},
	{week:22, day:1, dayWeek:"Pondelok", dayName:"Pondelok 22. týždňa po ZSD", epistle:"Kol §255 (2:13-20)", gospel:"Lk §43 (9:18-22)"},
	{week:22, day:2, dayWeek:"Utorok", dayName:"Utorok 22. týždňa po ZSD", epistle:"Kol §256 (2:20-3:3)", gospel:"Lk §44 (9:23-27)"},
	{week:22, day:3, dayWeek:"Streda", dayName:"Streda 22. týždňa po ZSD", epistle:"Kol §259 (3:17-4:1)", gospel:"Lk §47 (9:44-50)"},
	{week:22, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 22. týždňa po ZSD", epistle:"Kol §260 (4:2-9)", gospel:"Lk §48 (9:49-56)"},
	{week:22, day:5, dayWeek:"Piatok", dayName:"Piatok 22. týždňa po ZSD", epistle:"Kol §261 (4:10-18)", gospel:"Lk §50 (10:1-15)"},
	{week:22, day:6, dayWeek:"Sobota", dayName:"Sobota 22. týždňa po ZSD", epistle:"2 Kor §178 (5:1-10a)", gospel:"Lk §29 (7:1-10)"},
	{week:22, day:0, dayWeek:"Nedeľa", dayName:"22. nedeľa po ZSD", epistle:"Gal §215 (6:11-18)", gospel:"Lk §83 (16:19-31)"},
	{week:23, day:1, dayWeek:"Pondelok", dayName:"Pondelok 23. týždňa po ZSD", epistle:"1 Sol §262 (1:1-5)", gospel:"Lk §52 (10:22-25)"},
	{week:23, day:2, dayWeek:"Utorok", dayName:"Utorok 23. týždňa po ZSD", epistle:"1 Sol §263 (1:6-10)", gospel:"Lk §55 (11:1-10)"},
	{week:23, day:3, dayWeek:"Streda", dayName:"Streda 23. týždňa po ZSD", epistle:"1 Sol §264 (2:1-8)", gospel:"Lk §56 (11:9-13)"},
	{week:23, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 23. týždňa po ZSD", epistle:"1 Sol §265 (2:9-14a)", gospel:"Lk §57 (11:14-23)"},
	{week:23, day:5, dayWeek:"Piatok", dayName:"Piatok 23. týždňa po ZSD", epistle:"1 Sol §266 (2:14-19)", gospel:"Lk §58 (11:23-26)"},
	{week:23, day:6, dayWeek:"Sobota", dayName:"Sobota 23. týždňa po ZSD", epistle:"2 Kor §185 (8:1-5)", gospel:"Lk §36 (8:16-21)"},
	{week:23, day:0, dayWeek:"Nedeľa", dayName:"23. nedeľa po ZSD", epistle:"Ef §220 (2:4-10)", gospel:"Lk §38 (8:26-39)"},
	{week:24, day:1, dayWeek:"Pondelok", dayName:"Pondelok 24. týždňa po ZSD", epistle:"1 Sol §267 (2:20-3:8)", gospel:"Lk §59 (11:29-33)"},
	{week:24, day:2, dayWeek:"Utorok", dayName:"Utorok 24. týždňa po ZSD", epistle:"1 Sol §268 (3:9-13)", gospel:"Lk §60 (11:34-41)"},
	{week:24, day:3, dayWeek:"Streda", dayName:"Streda 24. týždňa po ZSD", epistle:"1 Sol §269 (4:1-12)", gospel:"Lk §61 (11:42-46)"},
	{week:24, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 24. týždňa po ZSD", epistle:"1 Sol §271 (5:1-8)", gospel:"Lk §62 (11:47-12:1)"},
	{week:24, day:5, dayWeek:"Piatok", dayName:"Piatok 24. týždňa po ZSD", epistle:"1 Sol §272 (5:9-13, 24-28)", gospel:"Lk §63 (12:2-12)"},
	{week:24, day:6, dayWeek:"Sobota", dayName:"Sobota 24. týždňa po ZSD", epistle:"2 Kor §191 (11:1-6)", gospel:"Lk §40 (9:1-6)"},
	{week:24, day:0, dayWeek:"Nedeľa", dayName:"24. nedeľa po ZSD", epistle:"Ef §221 (2:14-22)", gospel:"Lk §39 (8:41-56)"},
	{week:25, day:1, dayWeek:"Pondelok", dayName:"Pondelok 25. týždňa po ZSD", epistle:"2 Sol §274 (1:1-10)", gospel:"Lk §65 (12:13-15, 22b-31)"},
	{week:25, day:2, dayWeek:"Utorok", dayName:"Utorok 25. týždňa po ZSD", epistle:"2 Sol §274a (1:10b-2:2)", gospel:"Lk §68 (12:42-48)"},
	{week:25, day:3, dayWeek:"Streda", dayName:"Streda 25. týždňa po ZSD", epistle:"2 Sol §275 (2:1-12)", gospel:"Lk §69 (12:48b-59)"},
	{week:25, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 25. týždňa po ZSD", epistle:"2 Sol §276 (2:13-3:5)", gospel:"Lk §70 (13:1-9)"},
	{week:25, day:5, dayWeek:"Piatok", dayName:"Piatok 25. týždňa po ZSD", epistle:"2 Sol §277 (3:6-18)", gospel:"Lk §73 (13:31-35)"},
	{week:25, day:6, dayWeek:"Sobota", dayName:"Sobota 25. týždňa po ZSD", epistle:"Gal §199 (1:3-10)", gospel:"Lk §46 (9:37-43a)"},
	{week:25, day:0, dayWeek:"Nedeľa", dayName:"25. nedeľa po ZSD", epistle:"Ef §224 (4:1-6)", gospel:"Lk §53 (10:25-37)"},
	{week:26, day:1, dayWeek:"Pondelok", dayName:"Pondelok 26. týždňa po ZSD", epistle:"1 Tim §278 (1:1-7)", gospel:"Lk §75 (14:1, 12-15)"},
	{week:26, day:2, dayWeek:"Utorok", dayName:"Utorok 26. týždňa po ZSD", epistle:"1 Tim §279 (1:8-14)", gospel:"Lk §77 (14:25-35)"},
	{week:26, day:3, dayWeek:"Streda", dayName:"Streda 26. týždňa po ZSD", epistle:"1 Tim §281 (1:18-20; 2:8-15)", gospel:"Lk §78 (15:1-10)"},
	{week:26, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 26. týždňa po ZSD", epistle:"1 Tim §283 (3:1-13)", gospel:"Lk §80 (16:1-9)"},
	{week:26, day:5, dayWeek:"Piatok", dayName:"Piatok 26. týždňa po ZSD", epistle:"1 Tim §285 (4:4-8,16)", gospel:"Lk §82 (16:15-18; 17:1-4)"},
	{week:26, day:6, dayWeek:"Sobota", dayName:"Sobota 26. týždňa po ZSD", epistle:"Gal §205 (3:8-12)", gospel:"Lk §49 (9:57-62)"},
	{week:26, day:0, dayWeek:"Nedeľa", dayName:"26. nedeľa po ZSD", epistle:"Ef §229 (5:8b-19)", gospel:"Lk §66 (12:16-21)"},
	{week:27, day:1, dayWeek:"Pondelok", dayName:"Pondelok 27. týždňa po ZSD", epistle:"1 Tim §285a (5:1-10)", gospel:"Lk §86 (17:20-25)"},
	{week:27, day:2, dayWeek:"Utorok", dayName:"Utorok 27. týždňa po ZSD", epistle:"1 Tim §286 (5:11-21)", gospel:"Lk §87 (17:26-37)"},
	{week:27, day:3, dayWeek:"Streda", dayName:"Streda 27. týždňa po ZSD", epistle:"1 Tim §287 (5:22-6:11a)", gospel:"Lk §90 (18:15-17, 26-30)"},
	{week:27, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 27. týždňa po ZSD", epistle:"1 Tim §289 (6:17-21)", gospel:"Lk §92 (18:31-34)"},
	{week:27, day:5, dayWeek:"Piatok", dayName:"Piatok 27. týždňa po ZSD", epistle:"2 Tim §290 (1:1-2, 8-18)", gospel:"Lk §95 (19:12-28)"},
	{week:27, day:6, dayWeek:"Sobota", dayName:"Sobota 27. týždňa po ZSD", epistle:"Gal §213 (5:22-6:2)", gospel:"Lk §51a (10:19-21)"},
	{week:27, day:0, dayWeek:"Nedeľa", dayName:"27. nedeľa po ZSD", epistle:"Ef §233 (6:10-17)", gospel:"Lk §71 (13:10-17)"},
	{week:28, day:1, dayWeek:"Pondelok", dayName:"Pondelok 28. týždňa po ZSD", epistle:"2 Tim §294 (2:20-26)", gospel:"Lk §97 (19:37-44)"},
	{week:28, day:2, dayWeek:"Utorok", dayName:"Utorok 28. týždňa po ZSD", epistle:"2 Tim §297 (3:16-4:4)", gospel:"Lk §98 (19:45-48)"},
	{week:28, day:3, dayWeek:"Streda", dayName:"Streda 28. týždňa po ZSD", epistle:"2 Tim §299 (4:9-22)", gospel:"Lk §99 (20:1-8)"},
	{week:28, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 28. týždňa po ZSD", epistle:"Tit §300a (1:5-2:1)", gospel:"Lk §100 (20:9-18)"},
	{week:28, day:5, dayWeek:"Piatok", dayName:"Piatok 28. týždňa po ZSD", epistle:"Tit §301 (1:15-2:10)", gospel:"Lk §101 (20:19-26)"},
	{week:28, day:6, dayWeek:"Sobota", dayName:"Sobota 28. týždňa po ZSD", epistle:"Ef §218 (1:16-23)", gospel:"Lk §67 (12:32-40)"},
	{week:28, day:0, dayWeek:"Nedeľa", dayName:"28. nedeľa po ZSD", epistle:"Kol §250 (1:12-18)", gospel:"Lk §76 (14:16-24)"},
	{week:29, day:1, dayWeek:"Pondelok", dayName:"Pondelok 29. týždňa po ZSD", epistle:"Heb §308 (3:5-11, 17-19)", gospel:"Lk §102 (20:27-44)"},
	{week:29, day:2, dayWeek:"Utorok", dayName:"Utorok 29. týždňa po ZSD", epistle:"Heb §310 (4:1-13)", gospel:"Lk §106 (21:12-19)"},
	{week:29, day:3, dayWeek:"Streda", dayName:"Streda 29. týždňa po ZSD", epistle:"Heb §312 (5:11-6:8)", gospel:"Lk §104 (21:5-7, 10-11, 20-24)"},
	{week:29, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 29. týždňa po ZSD", epistle:"Heb §315 (7:1-6)", gospel:"Lk §107 (21:28-33)"},
	{week:29, day:5, dayWeek:"Piatok", dayName:"Piatok 29. týždňa po ZSD", epistle:"Heb §317 (7:18-25)", gospel:"Lk §108 (21:37-22:8)"},
	{week:29, day:6, dayWeek:"Sobota", dayName:"Sobota 29. týždňa po ZSD", epistle:"Ef §220a (2:11-13)", gospel:"Lk §72 (13:18-29)"},
	{week:29, day:0, dayWeek:"Nedeľa", dayName:"29. nedeľa po ZSD", epistle:"Kol §257 (3:4-11)", gospel:"Lk §85 (17:12-19)"},
	{week:30, day:1, dayWeek:"Pondelok", dayName:"Pondelok 30. týždňa po ZSD", epistle:"Heb §319 (8:7-13)", gospel:"Mk §33 (8:11-21)"},
	{week:30, day:2, dayWeek:"Utorok", dayName:"Utorok 30. týždňa po ZSD", epistle:"Heb §321 (9:8-10, 15-23)", gospel:"Mk §34 (8:22-26)"},
	{week:30, day:3, dayWeek:"Streda", dayName:"Streda 30. týždňa po ZSD", epistle:"Heb §323 (10:1-18)", gospel:"Mk §36 (8:30-34)"},
	{week:30, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 30. týždňa po ZSD", epistle:"Heb §326 (10:35-11:7)", gospel:"Mk §39 (9:10-16)"},
	{week:30, day:5, dayWeek:"Piatok", dayName:"Piatok 30. týždňa po ZSD", epistle:"Heb §327 (11:8, 11-16)", gospel:"Mk §41 (9:33-41)"},
	{week:30, day:6, dayWeek:"Sobota", dayName:"Sobota 30. týždňa po ZSD", epistle:"Ef §228 (5:1-8)", gospel:"Lk §74 (14:1-11)"},
	{week:30, day:0, dayWeek:"Nedeľa", dayName:"30. nedeľa po ZSD", epistle:"Kol §258 (3:12-16)", gospel:"Lk §91 (18:18-27)"},
	{week:31, day:1, dayWeek:"Pondelok", dayName:"Pondelok 31. týždňa po ZSD", epistle:"Heb §329 (11:17-23, 27-31)", gospel:"Mk §42 (9:42-10:1)"},
	{week:31, day:2, dayWeek:"Utorok", dayName:"Utorok 31. týždňa po ZSD", epistle:"Heb §333 (12:25, 26, 13:22-25)", gospel:"Mk §43 (10:2-12)"},
	{week:31, day:3, dayWeek:"Streda", dayName:"Streda 31. týždňa po ZSD", epistle:"Jak §50 (1:1-18)", gospel:"Mk §44 (10:11b-16)"},
	{week:31, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 31. týždňa po ZSD", epistle:"Jak §51 (1:19-27)", gospel:"Mk §45 (10:17-27)"},
	{week:31, day:5, dayWeek:"Piatok", dayName:"Piatok 31. týždňa po ZSD", epistle:"Jak §52 (2:1-13)", gospel:"Mk §46 (10:23b-32a)"},
	{week:31, day:6, dayWeek:"Sobota", dayName:"Sobota 31. týždňa po ZSD", epistle:"Kol §249a (1:3-6)", gospel:"Lk §81 (16:10-15)"},
	{week:31, day:0, dayWeek:"Nedeľa", dayName:"31. nedeľa po ZSD", epistle:"1 Tim §280a (1:15-17)", gospel:"Lk §93 (18:35-43)"},
	{week:32, day:1, dayWeek:"Pondelok", dayName:"Pondelok 32. týždňa po ZSD", epistle:"Jak §53 (2:14-26)", gospel:"Mk §48 (10:46-52)"},
	{week:32, day:2, dayWeek:"Utorok", dayName:"Utorok 32. týždňa po ZSD", epistle:"Jak §54 (3:1-10)", gospel:"Mk §50 (11:11-23)"},
	{week:32, day:3, dayWeek:"Streda", dayName:"Streda 32. týždňa po ZSD", epistle:"Jak §55 (3:11-4:6)", gospel:"Mk §51 (11:22b-26)"},
	{week:32, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 32. týždňa po ZSD", epistle:"Jak §56 (4:7-5:9)", gospel:"Mk §52 (11:27-33)"},
	{week:32, day:5, dayWeek:"Piatok", dayName:"Piatok 32. týždňa po ZSD", epistle:"1 Pt §58 (1:1-2, 10-12, 2:6-10)", gospel:"Mk §53 (12:1-12)"},
	{week:32, day:6, dayWeek:"Sobota", dayName:"Sobota 32. týždňa po ZSD", epistle:"1 Sol §273 (5:14-23)", gospel:"Lk §84 (17:3-10)"},
	{week:32, day:0, dayWeek:"Nedeľa", dayName:"32. nedeľa po ZSD", epistle:"1 Tim §285a (4:9-15)", gospel:"Lk §94 (19:1-10)"},
	{week:33, day:1, dayWeek:"Pondelok", dayName:"Pondelok 33. týždňa po ZSD", epistle:"1 Pt §59 (2:21b-3:9)", gospel:"Mk §54 (12:13-17)"},
	{week:33, day:2, dayWeek:"Utorok", dayName:"Utorok 33. týždňa po ZSD", epistle:"1 Pt §60 (3:10-22)", gospel:"Mk §55 (12:18-27)"},
	{week:33, day:3, dayWeek:"Streda", dayName:"Streda 33. týždňa po ZSD", epistle:"1 Pt §61 (4:1-11)", gospel:"Mk §56 (12:28-37)"},
	{week:33, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 33. týždňa po ZSD", epistle:"1 Pt §62 (4:12-5:5)", gospel:"Mk §57 (12:38-44)"},
	{week:33, day:5, dayWeek:"Piatok", dayName:"Piatok 33. týždňa po ZSD", epistle:"2 Pt §64 (1:1-10a)", gospel:"Mk §58 (13:1-8)"},
	{week:33, day:6, dayWeek:"Sobota", dayName:"Sobota 33. týždňa po ZSD", epistle:"2 Tim §293 (2:11-19)", gospel:"Lk §88 (18:2-8a)"},
	{week:33, day:0, dayWeek:"Nedeľa", dayName:"33. nedeľa po ZSD", epistle:"2 Tim §296 (3:10-15)", gospel:"Lk §89 (18:10-14)"},
	{week:34, day:1, dayWeek:"Pondelok", dayName:"Pondelok 34. týždňa po ZSD", epistle:"2 Pt §66 (1:20-2:9)", gospel:"Mk §59 (13:9-13)"},
	{week:34, day:2, dayWeek:"Utorok", dayName:"Utorok 34. týždňa po ZSD", epistle:"2 Pt §67 (2:9-22)", gospel:"Mk §60 (13:14-23)"},
	{week:34, day:3, dayWeek:"Streda", dayName:"Streda 34. týždňa po ZSD", epistle:"2 Pt §68 (3:1-18)", gospel:"Mk §61 (13:24-31)"},
	{week:34, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 34. týždňa po ZSD", epistle:"1 Jn §69 (1:8-2:6)", gospel:"Mk §62 (13:31-14:2)"},
	{week:34, day:5, dayWeek:"Piatok", dayName:"Piatok 34. týždňa po ZSD", epistle:"1 Jn §70 (2:7-17)", gospel:"Mk §63 (14:3-9)"},
	{week:34, day:6, dayWeek:"Sobota", dayName:"Sobota 34. týždňa po ZSD", epistle:"2 Tim §295 (3:1-9)", gospel:"Lk §103 (20:45-21:4)"},
	{week:34, day:0, dayWeek:"Nedeľa", dayName:"34. nedeľa po ZSD", epistle:"1 Kor §135 (6:12-20)", gospel:"Lk §79 (15:11-32)"},
	{week:35, day:1, dayWeek:"Pondelok", dayName:"Pondelok 35. týždňa po ZSD", epistle:"1 Jn §71 (2:18-3:10a)", gospel:"Mk §49 (11:1-11)"},
	{week:35, day:2, dayWeek:"Utorok", dayName:"Utorok 35. týždňa po ZSD", epistle:"1 Jn §72 (3:10b-20)", gospel:"Mk §64 (14:10-42)"},
	{week:35, day:3, dayWeek:"Streda", dayName:"Streda 35. týždňa po ZSD", epistle:"1 Jn §73 (3:21-4:6)", gospel:"Mk §65 (14:43-15:1)"},
	{week:35, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 35. týždňa po ZSD", epistle:"1 Jn §74 (4:20-5:21)", gospel:"Mk §66 (15:1-15)"},
	{week:35, day:5, dayWeek:"Piatok", dayName:"Piatok 35. týždňa po ZSD", epistle:"2 Jn §75 (1:1-13)", gospel:"Mk §68 (15:22, 25, 33-41)"},
	{week:35, day:6, dayWeek:"Sobota", dayName:"Sobota 35. týždňa po ZSD", epistle:"1 Sol §270 (4:13-17)", gospel:"Jn §16 (5:24-30)", altEpistle:"1 Kor §146 (10:23-28)", altGospel:"Lk §105 (21:8-9, 25-27"},
	{week:35, day:0, dayWeek:"Nedeľa", dayName:"35. nedeľa po ZSD", epistle:"1 Kor §140 (8:8-9:2)", gospel:"Mt §106 (25:31-46)"},
	{week:36, day:1, dayWeek:"Pondelok", dayName:"Pondelok 36. týždňa po ZSD", epistle:"3 Jn §76 (1:1-15)", gospel:"Lk §96 (19:29-40; 22:7-39)"},
	{week:36, day:2, dayWeek:"Utorok", dayName:"Utorok 36. týždňa po ZSD", epistle:"Jud §77 (1-10)", gospel:"Lk §109 (22:39-42, 45b-23:1)"},
	{week:36, day:3, dayWeek:"Streda", dayName:"Streda 36. týždňa po ZSD"},
	{week:36, day:4, dayWeek:"Štvrtok", dayName:"Štvrtok 36. týždňa po ZSD", epistle:"Jud §78 (1:11-25)", gospel:"Lk §110 (23:1-34, 44-56)"},
	{week:36, day:5, dayWeek:"Piatok", dayName:"Piatok 36. týždňa po ZSD"},
	{week:36, day:6, dayWeek:"Sobota", dayName:"Sobota 36. týždňa po ZSD", epistle:"Rim §115 (14:19-23;16:25-27)", gospel:"Mt §16 (6:1-13)", altEpistle:"Gal §213 (5:22-6:2)", altGospel:"Mt §43 (11:27-30)"},
	{week:36, day:0, dayWeek:"Nedeľa", dayName:"36. nedeľa po ZSD", epistle:"Rim §112 (13:11b-14:4)", gospel:"Mt §17 (6:14-21)"}
];

export default readings;