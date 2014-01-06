update coach_course set ASS_FIL_LOC=replace(ASS_FIL_LOC,'X:\legacy_data\coach_metadata\',
                                         '/usr1/seuser/d00/content/legacy_data/coach/coach_metadata/') where ASS_FIL_LOC like 'X:\%';
update coach_course set COURSE_FILE_LOC=replace(COURSE_FILE_LOC,'X:\legacy_data\coach_metadata\',
                                                        '/usr1/seuser/d00/content/legacy_data/coach/coach_metadata/') where COURSE_FILE_LOC like 'X:\%';
quit;									